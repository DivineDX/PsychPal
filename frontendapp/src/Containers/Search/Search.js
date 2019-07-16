// Search

import { View } from 'react-native' // view is div in web
import { Card, Button, Text, SearchBar } from 'react-native-elements'  // RNE, an open source library
import React from 'react';

const App = () => {
  return (
    <View>
       <SearchBar
        placeholder="Search"
       />
      <Button
        title="Filter (smaller button)" />
      <Card title='Dr. James Milner'>
    	  <Text style={{marginBottom: 10}}>
          {`Spoken languages: English, Spanish\nMedical College of Liverpool`}
        </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='More details' />
      </Card>
      <Card title='Dr. Jadon Sancho'>
    	  <Text style={{marginBottom: 10}}>
          {`Spoken languages: English, German\nDortmund School of Medicine`}
        </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='More details' />
      </Card>
      <Card title='Dr. Robert Green'>
    	  <Text style={{marginBottom: 10}}>
          {`Spoken languages: English, Italian\nWest Ham Medical College`}
        </Text>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='More details' />
      </Card>
    </View>
    
  );
};

export default App;
