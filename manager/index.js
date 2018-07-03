import firebase from 'firebase';
import { AppRegistry } from 'react-native';
import App from './src/App';

const config = {
  apiKey: 'AIzaSyDsMT4xSksnXXDEVDgZ-ERDIVogCf9y5lA',
  authDomain: 'manager-1995a.firebaseapp.com',
  databaseURL: 'https://manager-1995a.firebaseio.com',
  projectId: 'manager-1995a',
  storageBucket: 'manager-1995a.appspot.com',
  messagingSenderId: '455448062565'
};
firebase.initializeApp(config);

AppRegistry.registerComponent('manager', () => App);
