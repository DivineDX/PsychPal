import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


export default class GetDataFromServer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataFetched: null,
      name: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3005/select*from patients where name = \'ben\'')
      .then(response => response.json())
      .then(data => this.setState({dataFetched: JSON.stringify(data[0].name)}))
  }
  //JSON.stringify(data)

  render() {
    console.log(this.state.dataFetched)
    return (
      <View>
        <Text style = {styles.sectionContainer}>{this.state.dataFetched}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 320,
    paddingHorizontal: 100,
    color: 'black'
  },
});


