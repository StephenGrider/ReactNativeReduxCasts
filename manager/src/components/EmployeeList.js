import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { employeesFetch } from '../actions';

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

  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    console.log(this.props.employees);
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

function mapStateToProps(state) {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
