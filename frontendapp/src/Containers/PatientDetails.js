import { View, StyleSheet } from 'react-native' // view is div in web
import { Button, Text, Card } from 'react-native-elements'  // RNE, an open source library
import React from 'react';
import TempFooter from './TempFooter';


const PatientDetails = () => {
  return (
    <View>
        <Card>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Patient Details' />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Treatment Plan' />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Schedule next appointment' />
      </Card>
      <TempFooter>
      </TempFooter>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
      marginHorizontal: 20,
      marginBottom: 10, 
    }
  })
export default PatientDetails;