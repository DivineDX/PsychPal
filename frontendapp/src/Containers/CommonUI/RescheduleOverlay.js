import { Button, Text, Overlay } from 'react-native-elements'
import React from 'react';

const App = () => {
  return (
      <Overlay>
        <Text h4>Request To Reschedule</Text>
        <Text>{'\n'}</Text>
        <Text h4>Date and Time picker here</Text>
        <Button title="Confirm"></Button>
        <Text>{'\n'}</Text>
        <Button title="Cancel"></Button>
      </Overlay>
  );
};

export default App;
