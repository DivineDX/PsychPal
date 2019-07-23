import React, {Component} from 'React'
import { Text } from 'react-native-elements'
import { View } from 'react-native'


appointments_test = [
    
]

export default class PlannerAlex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            appointments: appointments_test
        }
    }

    componentDidMount() {
        // for cj
    }

    render(props) {
        return (
            <View>
                <Text h4>Pending Appointments</Text>

                <Text h4>Upcoming Appointments</Text>

                <Text h4>Past Appointments</Text>
            </View>
        )
    }

}