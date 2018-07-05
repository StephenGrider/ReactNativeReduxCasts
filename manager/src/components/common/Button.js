import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, buttonStyle }) => {
  const { defaultButtonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[defaultButtonStyle, buttonStyle]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  defaultButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
