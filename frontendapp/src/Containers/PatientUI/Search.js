import { ScrollView } from 'react-native'
import { Button, SearchBar, ListItem } from 'react-native-elements'
import React, { Component } from 'react';

// need to refactor this based on database

// avatar image must be 128 px * 128 px
const test_list = [
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
     language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Andy Robertson',
    'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Andy Robertson',
    'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Amy Farha',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  },
  {
    'name': 'Chris Jackson',
    'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    language: [
      'English',
      'Spanish'
  ],
  }
  
]

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: test_list
        }
    }

    componentDidMount() {
        // for cj
    }

    render(props) {
        return (
            <ScrollView>
                {/* Attn CJ: Search query for name */}
                <SearchBar></SearchBar>
                {/* Filter by any match in language spoken */}
                <Button
                    title="Filter" />
                {
                    this.state.doctors.map((u) => (
                        <ListItem
                            leftAvatar={{ source: { uri: u.profile_pic_url } }}
                            title={u.name}
                            subtitle={u.language.toString()}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}