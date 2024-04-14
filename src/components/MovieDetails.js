import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import ItemSection from './ItemSection';
import Item from './Item';
import {Button, Linking} from 'react-native';
import CustomButton from './CustomButton';

const MovieDetails = props => {
  // const {headerContainer} = styles;
  const handleButtonClick = () => {
    const movieTitle = props.Title.Title;
    const searchQuery = encodeURIComponent(movieTitle);
    const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
    Linking.openURL(googleSearchUrl);
  };
  return (
    <Item>
      <ItemSection>
        <View style={styles.headerContainer}>
          <Text>Genre : {props.Title.Genre}</Text>
          <Text>Movie Title : {props.Title.Title}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image style={styles.image} source={{uri: props.Title.Images[0]}} />
      </ItemSection>
      <ItemSection>
        {/* <Button title="Vist the Website" onPress={handleButtonClick} /> */}
        <CustomButton
          title="Visit the Website"
          onPress={handleButtonClick}
          style={styles.button}
        />
      </ItemSection>
    </Item>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    width: 0,
    height: 300,
  },
  button: {
    width: '100%',
    height: 50,
    margin: '20px',
    alignSelf: 'center',
    backgroundColor: 'black',
  },
});

export default MovieDetails;

//rncs
// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class CarDetail extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})
