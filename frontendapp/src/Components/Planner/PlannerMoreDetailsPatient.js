import { View } from 'react-native'
import { Card, Button, Text } from 'react-native-elements'
import React from 'react';

const PlannerMoreDetailsPatient = () => {
  return (
    <View>
      <Text h4>{`\n  Friday, 21 July 2019\n  6:00pm - 8:00pm`}</Text>
      <Card title='Appointment with Dr Milner'>
        <Text h4> 
        </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Join Call' />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Request to reschedule' />
      </Card>
    </View>
    
  );
};

export default PlannerMoreDetailsPatient
