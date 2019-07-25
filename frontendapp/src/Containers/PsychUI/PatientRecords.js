import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import React, { Component } from 'react';

// Attn CJ: Data required here is all patients with >= 1 appointments with this specific doctor
const test_patients = [
	{
		'name': 'David Beckham',
		'profile_pic_url': 'https://c.imge.to/2019/07/25/Z71Vs.jpg'
	},
	{
		'name': 'Lionel Messi',
		'profile_pic_url': 'https://b.imge.to/2019/07/25/ZxesZ.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	},
	{
		'name': 'Andy Robertson',
		'profile_pic_url': 'https://c.imge.to/2019/07/23/NJXbH.jpg'
	}


]

export default class PatientRecords extends Component {
	constructor(props) {
		super(props)
		this.state = {
			patients: test_patients
		}
	}

	componentDidMount() {
		// for cj
	}

	render() {
		return (
			<ScrollView>
				{
					this.state.patients.map((u) => (
						<ListItem
							leftAvatar={{ source: { uri: u.profile_pic_url } }}
							title={u.name}
						/>
					))
				}
			</ScrollView>
		)
	}
}