// import React from 'react';
import { createStackNavigator } from 'react-navigation';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const Router = createStackNavigator(
  {
    LoginForm,
    EmployeeList
  },
  {
    initialRouteName: 'LoginForm'
  }
);

export default Router;
