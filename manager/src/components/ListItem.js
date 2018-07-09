import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;

    return (
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
