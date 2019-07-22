import { View, ScrollView } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import React from 'react';
import DoctorInfoCard from '../../Components/Cards/DoctorInfoCard'

const doctors = [
  {
      name: 'Mario Mandzukic',
      languages: 'English',
      profile_picture: ''
  },

  {
      name: 'Harry Kane',
      languages: 'Spanish',
      profile_picture: ''
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
            <DoctorInfoCard name={u.name} lang={u.languages}
              profile_picture={u.profile_picture}></DoctorInfoCard>
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
