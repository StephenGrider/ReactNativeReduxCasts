import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Employee List',
      headerLeft: null,
      headerRight: (
        <Button
          buttonStyle={{ borderWidth: 0, paddingTop: 8 }}
          onPress={() => navigation.navigate('EmployeeCreate')}
        >
          Add Employee
        </Button>
      )
    };
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
