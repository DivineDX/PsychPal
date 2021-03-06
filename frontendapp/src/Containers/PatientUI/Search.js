import { ScrollView } from 'react-native'
import { Button, SearchBar, ListItem } from 'react-native-elements'
import React, { Component } from 'react';
import connection from '../../../DatabaseInteraction/Connection'

// is used when database is not available 
const test_list = [
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': null,
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Andy Robertson',
    'profile_pic_url': "http://" + connection.connection + ":80/download/profile-pic/alex",
    'professional_credentials': 'MD (Liverpool)'
  },
  {
    'name': 'Dr. Andy Robertson',
    'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    'professional_credentials': 'MD (Liverpool)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Naomi Osaka',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    'professional_credentials': 'MBBS (NUS)'
  },
  {
    'name': 'Dr. Gary Cahill',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    'professional_credentials': 'MD (London)'
  }
]

//render search page
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: test_list,
            query: ''
        }
    }

    receive_query = (text) => {
      this.setState({
        query: text.toLowerCase()
      })
    }
  
    is_matched = (doctor) => {
      if (this.state.query == '') {
        return true
      } else {
        if (doctor.name.toLowerCase().includes(this.state.query)) {
          return true
        } else {
          return false
        }
      }
  
    }

    componentDidMount() {
      fetch('http://' + connection.connection + ':3005/select * from doctors')
      .then(response => response.json())
      .then(data => this.setState({
        doctors: data
    }))
    }

    render() {
        return (
            <ScrollView>
                <SearchBar 
                  placeholder='Search'
                  lightTheme='true'
                  onChangeText={this.receive_query}
                  value={this.state.query} />
                {
                    this.state.doctors.filter(this.is_matched).map((u) => (
                        <ListItem
                            leftAvatar={{ source: { uri: u.profile_pic_url } }}
                            title={u.name}
                            button onPress ={() => {this.props.navigation.navigate('DoctorDetails', {
                              DoctorName: u.name,
                              PatientName: this.props.screenProps.patientName
                            })}}
                            subtitle={u.professional_credentials}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}