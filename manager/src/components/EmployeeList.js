import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
  static navigationOptions = {
    title: 'Employee List',
    headerLeft: null
  };

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

export default EmployeeList;
