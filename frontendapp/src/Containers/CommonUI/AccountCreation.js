import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, Text, H1, Picker, Label } from 'native-base';
import { Formik } from 'formik';
import * as yup from "yup";
import InputBox from '../../Components/Input/InputBox';
import DOBInput from '../../Components/Input/DOBInput';
import PickerCountry from '../../Components/Input/PickerCountry';
import InputTextArea from '../../Components/Input/InputTextArea';
import LoginContainer from '../CommonUI/LoginContainer/LoginContainer';
import connection from '../../../DatabaseInteraction/Connection'

const inputTextArr = [
    { title: "Email", key: 'email', secure: false },
    { title: "User ID", key: 'userID', secure: false },
    { title: "Password", key: 'password', secure: true },
    { title: "Confirm Password", key: 'cfmPassword', secure: true },
    { title: "Name", key: 'name', secure: false }];

const textAreaPatient = [
    { title: "Give a description of yourself", placeholder: "I am a...", key: 'description' },
    { title: "Please provide a history of your past medical conditions.\n(Note: Conditions must be diagnosed by a certified medical professional, and not based on personal judgement)", placeholder: "I have a history of...", key: 'medicalHistory' },
];

const textAreaPsychiatrist = [
    { title: "Give a description of yourself", placeholder: "I am a...", key: 'description' },
    { title: "State your current employment status", placeholder: "I am currently working as a...", key: 'currentEmployment' },
    { title: "State your past work/volunteer experience as a psychiatrist", placeholder: "I am currently working as a...", key: 'workExperience' },
    { title: "State your educational qualifications", placeholder: "I have a Bachelor in ...", key: 'education' },
    { title: "State your professional certifications", placeholder: "I am a certified...", key: 'certifications' },
];

export default class AccountCreationForm extends Component {
    static navigationOptions = {
        title: 'Create Account'
    }

    constructor() {
        super();
        this.state = {
            type: '',
            email: '',
            userID: '',
            password: '',
            cfmPassword: '',
            name: '',
            gender: 'male', //dropdown
            dob: '',
            country: 'US', //picker with list of nationalities
            description: '',
            checkUserIDDuplicate: ' ',
            checkPasswordDuplicate: ' ',
            checkEmailDuplicate: ' ',
            checkDuplicate: false,
        }
    }

    createAccount = (values) => {
        if (this.state.type === '') { //not selected
            alert("Please select whether you are a patient or psychiatrist");
        } else {
            this.checkDuplicate(values, this.state.type);
            if (this.state.checkEmailDuplicate == ' ' &&
                this.state.checkPasswordDuplicate == ' ' &&
                this.state.checkUserIDDuplicate == ' '
                ) 
            {
                //this.setState(values);
                let flag = this.submitAccount(values);
                if (flag) { //connect to database, change condition to if backeend responses okay
                    if (this.state.type == 'patient') {
                        this.props.navigation.navigate('patientSignedIn', { //replaced with API fetch call 
                            patientName: values.name,
                        });
                    } else {
                        this.props.navigation.navigate('doctorSignedIn', { //replaced with API fetch call 
                            doctorName: values.name,
                        });  
                    }
                }  else {
                    return (
                        <ActivityIndicator/>
                    )
                }
            } else {
                this.setState({
                    checkDuplicate: true
                })
            }
        }
    }

    //check database if category (email/username/password etc) is used type: patient or doctor
    checkDuplicate(value, usertype) {
        this.setState({
            checkUserIDDuplicate: ' ',
            checkPasswordDuplicate: ' ',
            checkEmailDuplicate: ' '
        })
        if (usertype == 'psychiatrist') {
            let doctors = this.props.navigation.state.params.doctors
            for (let doc of doctors) {
                if (doc.user_id == value.userID ) {
                    this.setState({
                        checkUserIDDuplicate : 'UserID'
                    })
                } else if (doc.password == value.password) {
                    this.setState({
                        checkPasswordDuplicate : 'Password'
                    })    
                } else if (doc.email == value.email) {
                    this.setState({
                        checkEmailDuplicate : 'Email'
                    })    
                }
            }
        } else {
            let patients = this.props.navigation.state.params.patients
            for (let patient of patients) {
                if (patient.user_id == value.userID ) {
                    this.setState({
                        checkUserIDDuplicate : 'UserID'
                    })
                }
                if (patient.password == value.password) {
                    this.setState({
                        checkPasswordDuplicate : 'Password'
                    }) 
                }  
                if (patient.email == value.email) {
                    this.setState({
                        checkEmailDuplicate : 'Email'
                    })
                }  
            }
        }
    }

    async submitAccount(values) {
        let url = ''
        if (this.state.type == 'patient') {
            url = 'http://localhost:3005/insert into patients values(\'' + 
            values.name + '\', \'' + 
            values.gender + '\', 21, \'' + 
            values.country + '\', \'' + 
            values.password + '\', \'' + 
            values.userID + '\',null, default, \'' +
            values.email + '\');'
            console.log(url)
        } else {
            url = 'http://localhost:3005/insert doctor values(\'' + 
            values.name + '\', \'' + 
            values.gender + '\', 21, \'' + 
            values.country + '\', \'' + 
            values.password + '\', \'' + 
            values.userID + '\',null, default, \'' +
            values.email + '\');'
            console.log(url)
        }
        return await fetch(url).then(() => {
            return true;
        })
    }
    displayAccCreationError() {
        return this.state.checkUserIDDuplicate + ' ' + this.state.checkPasswordDuplicate + ' ' + this.state.checkEmailDuplicate + ' already taken!'
    }

    toggleType = (type) => {
        this.setState({ type: type });
        console.log("Toggling", this.state.type);
    }

    render() {
        const reqString = "This field is required";
        return (
            <Formik
                initialValues={{
                    gender: 'male', country: 'US'
                }}
                onSubmit={values => this.createAccount(values)}
                validationSchema={yup.object().shape({
                    email: yup.string().email("This is an invalid email").required(reqString),
                    userID: yup.string().min(6, "UserID must be at least 6 characters").required(reqString),
                    password: yup.string().min(8, "Password must be at least 8 characters").required(reqString),
                    cfmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required(reqString),
                    name: yup.string().required(reqString).min(3, "Please use your full name"),
                    gender: yup.string().required(reqString),
                    dob: yup.date().required(reqString),
                    country: yup.string().required(reqString),
                    description: yup.string().required(reqString).min(10, "Please give a more substantial description"),
                    medicalHistory: this.state.type === 'patient' && yup.string(),
                    currentEmployment: this.state.type === 'psychiatrist' && yup.string().required(reqString),
                    workExperience: this.state.type === 'psychiatrist' && yup.string().required(reqString),
                    education: this.state.type === 'psychiatrist' && yup.string().required(reqString),
                    certifications: this.state.type === 'psychiatrist' && yup.string().required(reqString),
                })}
            >

                {({ values, handleChange, errors, touched, isValid, handleSubmit, handleBlur }) => (
                    <ScrollView style={styles.container}>
                        <View style={styles.headerContainer}>
                            <H1>I am a...</H1>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                onPress={() => this.toggleType('patient')}
                                success={this.state.type === 'patient'}
                                style={[styles.buttonStyle, styles.leftButton]}>
                                <Text>Patient</Text>
                            </Button>
                            <Button
                                onPress={() => this.toggleType('psychiatrist')}
                                success={this.state.type === 'psychiatrist'}
                                style={[styles.buttonStyle, styles.rightButton]}>
                                <Text>Psychiatrist</Text>
                            </Button>
                        </View>

                        {
                            inputTextArr.map(e => {
                                return <InputBox
                                    title={e.title}
                                    handleChange={handleChange(e.key)}
                                    handleBlur={handleBlur(e.key)}
                                    value={values[e.key]}
                                    touched={touched[e.key]}
                                    errors={errors[e.key]}
                                    secure={e.secure}
                                />
                            })
                        }

                        <View>
                            <Label>Select Gender</Label>
                            <Picker
                                mode="dropdown"
                                placeholder="Gender"
                                placeholderStyle={{ color: "#2874F0" }}
                                note={false}
                                selectedValue={values.gender}
                                onValueChange={handleChange('gender')}
                            >
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                                <Picker.Item label="Others" value="others" />
                            </Picker>
                        </View>

                        <DOBInput
                            handleChange={handleChange('dob')}
                            handleBlur={handleBlur('dob')}
                            value={values.dob}
                            touched={touched.dob}
                            errors={errors.dob}
                        />

                        <PickerCountry
                            handleChange={handleChange('country')}
                            value={values.country}
                        />


                        {this.state.type === 'patient'
                            && textAreaPatient.map(e => {
                                return (<InputTextArea
                                    title={e.title}
                                    placeholder={e.placeholder}
                                    handleChange={handleChange(e.key)}
                                    handleBlur={handleBlur(e.key)}
                                    value={values[e.key]}
                                    touched={touched[e.key]}
                                    errors={errors[e.key]}
                                />);
                            })
                        }

                        {this.state.type === 'psychiatrist'
                            && textAreaPsychiatrist.map(e => {
                                return (<InputTextArea
                                    title={e.title}
                                    placeholder={e.placeholder}
                                    handleChange={handleChange(e.key)}
                                    handleBlur={handleBlur(e.key)}
                                    value={values[e.key]}
                                    touched={touched[e.key]}
                                    errors={errors[e.key]}
                                />);
                            })
                        }
                        {this.state.checkDuplicate == true? 
                            <Text style = {{color: 'red'}}>{this.displayAccCreationError()}</Text>
                            :
                            null
                        }

                        <Button
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text>Create Account</Text>
                        </Button>
                    </ScrollView>
                )}
            </Formik>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
    },
    buttonStyle: {
        width: 200,
        height: 50,
        justifyContent: 'center',

    },
    leftButton: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    rightButton: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    submitButton: {
        marginTop: 20,
    },
    headerContainer: {
        marginVertical: 20,
        alignItems: 'center',
    }
})