// TreatmentPatient

import { View } from 'react-native' // view is div in web
import { Card, Button, Text } from 'react-native-elements'  // RNE, an open source library
import React from 'react';

const App = () => {
  return (
    <View>
      <Text h4>{`\n  Mr. Vardy's Treatment Plan\n`}</Text>
      <Card title='Celexa'>
      <Text>{'Antidepressant. 2 times a day, after meals.\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Remove' />
      </Card>
      <Card title='Paxil'>
      <Text>{'Medication for PTSD. 3 times a day, before/after meals.\n'}</Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Remove' />
      </Card>
    </View>
    
  );
};

export default App;
