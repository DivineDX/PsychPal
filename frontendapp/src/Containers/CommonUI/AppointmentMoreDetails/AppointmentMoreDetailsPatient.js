// AppointmentPage Patient

import { View } from 'react-native' // view is div in web
import { Card, Button, Text } from 'react-native-elements'  // RNE, an open source library
import React from 'react';


const App = () => {
  return (
    <View>
      <Text h4>{`\n  Friday, 21 July 2019\n  6:00pm - 8:00pm`}</Text>
      <Card title='Appointment with Dr Milner'>
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

export default App;
