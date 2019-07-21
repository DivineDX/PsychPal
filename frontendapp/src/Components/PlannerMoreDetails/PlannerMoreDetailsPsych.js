import { View } from 'react-native'
import { Card, Button, Text } from 'react-native-elements'
import React from 'react';


const PlannerMoreDetailsPsych = () => {
  return (
    <View>
      <Text h4>{`\n  Friday, 21 July 2019\n  6:00pm - 8:00pm`}</Text>
      <Card title='Appointment with Mr. Vardy'>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Join Call' />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Request To Reschedule' />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title={`Patient's Treatment Plan`} />
        <Text>{'\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Schedule Next Appointment' />
      </Card>
    </View>
    
  );
};

export default PlannerMoreDetailsPsych