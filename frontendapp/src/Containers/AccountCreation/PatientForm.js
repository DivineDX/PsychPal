import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from "yup";
import InputTextArea from '../../Components/Input/InputTextArea';

export default class PatientForm extends Component {
    submitForm = (values) => { //API Post Call here
        console.log(values);
    }

    render() {
        return (
            <Formik
                initialValues={{
                    medicalHistory: ''
                }}
                onSubmit={values => this.submitForm(values)}
                // validationSchema={yup.object().shape({
                //     medicalHistory: yup.string(),
                // })}
            >

                {({ values, handleChange, errors, touched, handleSubmit, handleBlur }) => (
                    <View style={styles.container}>
                        <InputTextArea
                            title={"Please provide a history of your past medical conditions.\n(Note: Conditions must be diagnosed by a certified medical professional, and not based on personal judgement)"}
                            placeholder = {"I have a history of..."}
                            handleChange={handleChange('medicalHistory')}
                            handleBlur={handleBlur('medicalHistory')}
                            value={values.medicalHistory}
                            touched={touched.medicalHistory}
                            errors={errors.medicalHistory}
                        />
                        <Button
                            title="Complete Particulars"
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
    submitButton: {
        marginTop: 20,
    },
})