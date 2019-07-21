// Search

import { View, ScrollView } from 'react-native' // view is div in web
import { Card, Button, Text, SearchBar } from 'react-native-elements'  // RNE, an open source library
import React from 'react';
import DoctorCard from '../../Components/Cards/DoctorCard'

const newDoctor = "Harry Kane"

const doctors = [
  {
      name: 'brynn',
  },

  {
      name: 'Antelope',
   },
]



/*function retrieveDoctorInfo() {
  //return array of doctor objects
}

export default class Search extends Comment {
  constructor(props) {
    super(props);
    this.state = {
      doctors: null
    }
  }

  ComponentWillMount() {
    this.setState({doctors: this.retrieveDoctorInfo(

    )})
  }
}
*/

const App = () => {
  return (
    <View>
    <SearchBar></SearchBar>
    <ScrollView>
    <View>
      <Button
        title="Filter (smaller button)" />
      {
        doctors.map((u) => {
          return (
            <DoctorCard doctorName={u.name}></DoctorCard>
          )
        })
      }
      
      {/* <Card title='Dr. James Milner'>
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
      </Card> */}
    </View>
    </ScrollView>
    </View>
  );
};

export default App;
