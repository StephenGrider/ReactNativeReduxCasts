import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <View>
        <CardSection>
          <Text>{name}</Text>
        </CardSection>
      </View>
    );
  }
}

export default ListItem;
