import {Text, View} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <>
      <View style={styles.ViewStyles}>
        <Text style={styles.headerText}>{props.value}</Text>
      </View>
    </>
  );
};

const styles = {
  headerText: {
    backgroundColor: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white', // Change the color to your preference
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    // Add more styles as needed
  },
  ViewStyles: {
    margin: 20,
  },
  textStyles: {
    fontSize: 24,
    margin: 20,
  },
};

export default Header;
