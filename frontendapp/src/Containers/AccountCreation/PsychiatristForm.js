import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from "yup";
import InputBox from '../../Components/Input/InputBox';
import InputTextArea from '../../Components/Input/InputTextArea';

export default class PsychiatristForm extends Component {
    submitForm = (values) => { //API Post Call here
        console.log(values);
    }

    render() {
        const reqString = "This field is required";
        let data = new FormData();
        return (
            <Formik
                initialValues={{
                    currentEmployment: '',
                    workExperience: '',
                    education: '',
                    certifications: '',
                }}
                onSubmit={values => this.submitForm(values)}
                validationSchema={yup.object().shape({
                    currentEmployment: yup.string().required(reqString),
                    workExperience: yup.string().required(reqString),
                    education: yup.string().required(reqString),
                })}
            >
                {({ values, handleChange, errors, touched, isValid, handleSubmit, handleBlur }) => (
                    <ScrollView style={styles.container}>
                        <InputTextArea
                            title={"State your current employment status"}
                            placeholder={"I am currently working as a..."}
                            handleChange={handleChange('currentEmployment')}
                            handleBlur={handleBlur('currentEmployment')}
                            value={values.currentEmployment}
                            touched={touched.currentEmployment}
                            errors={errors.currentEmployment}
                        />

                        <InputTextArea
                            title={"State your past work/volunteer experience as a psychiatrist"}
                            placeholder={"I have worked as..."}
                            handleChange={handleChange('workExperience')}
                            handleBlur={handleBlur('workExperience')}
                            value={values.workExperience}
                            touched={touched.workExperience}
                            errors={errors.workExperience}
                        />

                        <InputTextArea
                            title={"State your educational qualifications"}
                            placeholder={"I have a Bachelor in ..."}
                            handleChange={handleChange('education')}
                            handleBlur={handleBlur('education')}
                            value={values.education}
                            touched={touched.education}
                            errors={errors.education}
                        />
                        <InputTextArea
                            title={"State your professional certifications"}
                            placeholder={"I am a certified..."}
                            handleChange={handleChange('certifications')}
                            handleBlur={handleBlur('certifications')}
                            value={values.certifications}
                            touched={touched.certifications}
                            errors={errors.certifications}
                        />
                        <Button
                            title="Submit Details"
                            disabled={!isValid}
                            onPress={handleSubmit}
                            style={styles.submitButton} />
                    </ScrollView>
                )}
            </Formik>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    },
    submitButton: {
        marginTop: 20,
    },
})