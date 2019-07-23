import { View, ScrollView } from 'react-native'
import { Button, SearchBar, ListItem } from 'react-native-elements'
import React from 'react';
import DoctorInfoCard from '../../Components/Cards/DoctorInfoCard'
  
const doctors = [
{
    "name": "Erik Lamela",
    "language1": "English",
    "language2": "Spanish",
    "language3": null,
    "profile_picture_uri": null
  },

  {
    "name": "John Stones",
    "language1": "English",
    "language2": null,
    "language3": null,
    "profile_picture_uri": null
   },

   {
    "name": "David Luiz",
    "language1": 'Spanis',
    "language2": null,
    "language3": null,
    "profile_picture_uri": 'https://c.imge.to/2019/07/23/NJXbH.jpg'
   },
]

const testlist = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Andy Robertson',
    avatar_url: 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    subtitle: 'Scotland Captain'
  },
  {
    name: 'Andy Robertson',
    avatar_url: 'https://c.imge.to/2019/07/23/NJXbH.jpg',
    subtitle: 'Champions League Winner'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
  
]

const Search = () => {
  return (
    
    <ScrollView>
      {/* Attn CJ: Search query for name */}
      <SearchBar></SearchBar>
      <Button
        title="Filter" />
        {
          testlist.map((u) => (
            <ListItem
              leftAvatar={{ source:{uri: u.avatar_url} }}
              //key={u.name}
              title={u.name}
              subtitle={u.subtitle}
            />
          ))
        }
      </ScrollView>

  
  )
}

export default Search;

// {
//   doctors.map((u) => {
//     return (
//       <DoctorInfoCard name={u.name} lang={u.languages}
//         profile_picture={u.profile_picture}></DoctorInfoCard>
//     )
//   })
// } 