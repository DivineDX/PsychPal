import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, H1 } from 'native-base';
import { Formik } from 'formik';
import * as yup from "yup";
import InputBox from '../../Components/Input/InputBox';

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
        }
    }

    createAccount = (values) => {
        if (this.state.type === '') { //not selected
            alert("Please select whether you are a patient or psychiatrist");
        } else {
            //Must check if email/userID already used
            this.setState(values);
            const { navigation } = this.props;
            if (true) { //connect to database, change condition to if backeend responses okay
                navigation.navigate('Home', {
                    userID: this.state.userID,
                    type: this.state.type,
                });
            }
        }
    }

    toggleType = (type) => {
        this.setState({ type: type });
    }

    render() {
        const reqString = "This field is required";
        return (
            <Formik
                initialValues={{ email: '', userID: '', password: '', cfmPassword: '', }}
                onSubmit={values => this.createAccount(values)}
                validationSchema={yup.object().shape({
                    // email: yup.string().email("This is an invalid email").required(reqString),
                    userID: yup.string().min(6, "UserID must be at least 6 characters").required(reqString),
                    // password: yup.string().min(8, "Password must be at least 8 characters").required(reqString),
                    // cfmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required(reqString),
                })}
            >

                {({ values, handleChange, errors, touched, isValid, handleSubmit, handleBlur }) => (
                    <View style={styles.container}>
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

                        <InputBox
                            title={"Email"}
                            handleChange={handleChange('email')}
                            handleBlur={handleBlur('email')}
                            value={values.email}
                            touched={touched.email}
                            errors={errors.email}
                        />

                        <InputBox
                            title={"User ID"}
                            handleChange={handleChange('userID')}
                            handleBlur={handleBlur('userID')}
                            value={values.userID}
                            touched={touched.userID}
                            errors={errors.userID}
                        />

                        <InputBox
                            title={"Password"}
                            handleChange={handleChange('password')}
                            handleBlur={handleBlur('password')}
                            value={values.password}
                            touched={touched.password}
                            errors={errors.password}
                            secure={true}
                        />

                        <InputBox
                            title={"Confirm Password"}
                            handleChange={handleChange('cfmPassword')}
                            handleBlur={handleBlur('cfmPassword')}
                            value={values.cfmPassword}
                            touched={touched.cfmPassword}
                            errors={errors.cfmPassword}
                            secure={true}
                        />

                        <Button
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text>Create Account</Text>
                        </Button>
                    </View>
                )}
            </Formik>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 20,
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