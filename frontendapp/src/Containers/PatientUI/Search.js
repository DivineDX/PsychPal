import { View, ScrollView } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
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
    "language1": "Portugese",
    "language2": null,
    "language3": null,
    "profile_picture_uri": "https://hu.wikipedia.org/wiki/David_Luiz#/media/F%C3%A1jl:David_Luiz_and_Ahmed_Musa_(cropped).jpg"
   },
]

const Search = () => {
  return (
    <View>
    <SearchBar></SearchBar>
      <Button
        title="Filter (smaller button)" />
      
      {/* {
        doctors.map((u) => {
          return (
            <DoctorInfoCard name={u.name} lang={u.languages}
              profile_picture={u.profile_picture}></DoctorInfoCard>
          )
        })
      } */}
      
    </View>
  )
}

export default Search;
