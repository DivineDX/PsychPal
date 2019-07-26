import React, { Component } from 'react';
import { ScrollView } from 'react-native'
import { SearchBar, ListItem, Text } from 'react-native-elements'


// Attn CJ: data needed here is all the doctors signed up with us
const test_doctors_list = [
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
		'professional_credentials': 'MD (Liverpool)'
	},
	{
		'doctor_name': 'Dr. Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg',
		'professional_credentials': 'MD (Liverpool)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Naomi Osaka',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		'professional_credentials': 'MBBS (NUS)'
	},
	{
		'doctor_name': 'Dr. Gary Cahill',
		'profile_pic_url': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		'professional_credentials': 'MD (London)'
	}
]

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			doctors: test_doctors_list,
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
			if (doctor.doctor_name.toLowerCase().includes(this.state.query)) {
				return true
			} else {
				return false
			}
		}

	}

	componentDidMount() {
		// for CJ
	}

	render(props) {
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
							title={u.doctor_name}
							subtitle={u.professional_credentials}
						/>
					))
				}
			</ScrollView>
		)
	}
}