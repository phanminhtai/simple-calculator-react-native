import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import Calculator from './components/simple-calculator.js';

export default class main extends Component {
  render(){
    return(
      <>
        <Calculator />
      </>
    )
  }
}
