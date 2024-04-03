// Importing necessary libraries
import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import MovieList from './src/components/MovieList';

// Defining the functional component named App
const App = () => {
  // Returning JSX with a Header and a Text component
  return (
    <>
      <View>
        <Header value={'MOVIES'} />
        <MovieList />
      </View>
    </>
  );
};

// Exporting the App component as the default export
export default App;
