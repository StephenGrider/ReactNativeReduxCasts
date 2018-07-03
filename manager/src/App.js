import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCQg64_gQZSuoP7BqTyWF-zKC0MjZXXe4Y',
  authDomain: 'manager-3c394.firebaseapp.com',
  databaseURL: 'https://manager-3c394.firebaseio.com',
  projectId: 'manager-3c394',
  storageBucket: 'manager-3c394.appspot.com',
  messagingSenderId: '257060765176'
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
