import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, Input, Button, Label, Text, Content, H1 } from 'native-base';
import { Formik } from 'formik';
import * as yup from "yup";
export default class AccountCreationForm extends Component {
    // static navigationOptions = {
    //     header: null
    // }

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
            this.setState(values);
            console.log(this.state);
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
                    email: yup.string().email("This is an invalid email").required(reqString),
                    userID: yup.string().min(6, "UserID must be at least 6 characters").required(reqString),
                    password: yup.string().min(8, "Password must be at least 8 characters").required(reqString),
                    cfmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required(reqString),
                })}
            >

                {({ values, handleChange, errors, touched, isValid, handleSubmit, handleBlur }) => (
                    <View style={styles.container}>
                        <View style = {styles.headerContainer}>
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

                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email} />
                        </Item>
                        {touched.email && errors.email &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        }

                        <Item stackedLabel>
                            <Label>User ID</Label>
                            <Input onChangeText={handleChange('userID')}
                                onBlur={handleBlur('userID')}
                                value={values.userID} />
                        </Item>
                        {touched.userID && errors.userID &&
                            <Text style={styles.errorText}>{errors.userID}</Text>
                        }

                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                        </Item>
                        {touched.password && errors.password &&
                            <Text style={styles.errorText}>{errors.password}</Text>
                        }

                        <Item stackedLabel>
                            <Label>Confirm Password</Label>
                            <Input onChangeText={handleChange('cfmPassword')}
                                onBlur={handleBlur('cfmPassword')}
                                value={values.cfmPassword}
                                secureTextEntry
                            />
                        </Item>
                        {touched.cfmPassword && errors.cfmPassword &&
                            <Text style={styles.errorText}>{errors.cfmPassword}</Text>
                        }

                        <Button
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text>Submit</Text>
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
        width: 175,
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