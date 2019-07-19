import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker, Label } from 'native-base';
import { Formik } from 'formik';
import * as yup from "yup";
import InputBox from '../../Components/Input/InputBox';
import DOBInput from '../../Components/Input/DOBInput';
import PickerCountry from '../../Components/Input/PickerCountry';
import InputTextArea from '../../Components/Input/InputTextArea';

export default class PersonalParticulars extends Component {

    submitForm = (values) => { //API Post Call here
        console.log(values);
    }

    render() {
        const reqString = "This field is required";

        return (
            <Formik
                initialValues={{
                    name: '',
                    gender: 'male', //dropdown
                    dob: '',
                    country: 'US', //picker with list of nationalities
                    description: '',
                }}
                onSubmit={values => this.submitForm(values)}
                validationSchema={yup.object().shape({
                    name: yup.string().required(reqString).min(3, "Please use your full name"),
                    gender: yup.string().required(reqString),
                    dob: yup.date().required(reqString),
                    country: yup.string().required(reqString),
                    description: yup.string().required(reqString).min(10, "Please give a more substantial description"),
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

                        <InputTextArea
                            title={"Give a description of yourself"}
                            placeholder={"I am a..."}
                            handleChange={handleChange('description')}
                            handleBlur={handleBlur('description')}
                            value={values.description}
                            touched={touched.description}
                            errors={errors.description}
                        />

                        <Button
                            title="Next"
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton} />
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
    submitButton: {
        marginTop: 20,
    },
})