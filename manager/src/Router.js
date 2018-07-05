import React from 'react';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';

const Router = createStackNavigator(
  {
    LoginForm,
    EmployeeList,
    EmployeeCreate
  },
  {
    initialRouteName: 'LoginForm'
  }
);

let navigator;
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName, params
    })
  );
};

export default () => {
  return (
    <Router
      ref={(navigatorRef) => {
        navigator = navigatorRef;
      }}
    />
  );
};
