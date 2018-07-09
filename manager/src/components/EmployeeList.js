import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

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

  renderRow({ item }) {
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
      />
    );
  }
}

function mapStateToProps(state) {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid, key: uid };
  });

  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
