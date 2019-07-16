import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from "yup";
import InputBox from '../../Components/Input/InputBox';

export default class AccountCreationForm extends Component {
    constructor() {
        super();
        // this.state = {
        // }
    }

    submitForm = (values) => {
        console.log(values);
    }

    render() {
        const reqString = "This field is required";

        return (
            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    gender: '', //dropdown
                    nationality: '',
                    languagesSpoken: ''
                }}
                onSubmit={values => this.submitForm(values)}
                validationSchema={yup.object().shape({
                    name: yup.string().required(reqString),
                    age: yup.number().required(reqString),
                    gender: yup.string().required(reqString),
                    languagesSpoken: yup.array().required(reqString),
                })}
            >

                {({ values, handleChange, errors, touched, isValid, handleSubmit, handleBlur }) => (
                    <View style={styles.container}>
                        <InputBox
                            title={"Name"}
                            handleChange={handleChange('name')}
                            handleBlur={handleBlur('name')}
                            value={values.name}
                            touched={touched.name}
                            errors={errors.name}
                        />

                        
                        {/* <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email} />
                        </Item>
                        {touched.email && errors.email &&
                            <Text style={styles.errorText}>{errors.email}</Text>
                        } */}



                        {/* <Button
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton}>
                            <Text>Submit</Text>
                        </Button> */}
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
})