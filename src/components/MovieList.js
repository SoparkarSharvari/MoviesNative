import {ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';
// const CarList = props => {
//   return (
//     <>
//       <View>
//         <Text>Car list</Text>
//         {/* <Text style={styles.textStyles}></Text> */}
//       </View>
//     </>
//   );
// };

//
// class CarList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cars: [], // Initialize state to hold fetched data
//       loading: true, // Add loading state
//     };
//   }
//   //life cycle method
//   componentDidMount() {
//     axios
//       .get('https://my-json-server.typicode.com/gunjan-keswani/cars/cars')
//       .then(response => {
//         this.setState({cars: response.data, loading: false});
//         console.log(this.state.cars);
//       });
//   }
//   render() {
//     console.log(this.state.cars);
//     const {cars, loading} = this.state;

//     return (
//       <>
//         <View>
//           <Text>Car list</Text>
//           {/* <Text style={styles.textStyles}>Your text here</Text> */}
//         </View>
//       </>
//     );
//   }
// }

// const styles = {
//   headerText: {
//     backgroundColor: 'black',
//     fontSize: 30,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     color: 'white', // Change the color to your preference
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 5,
//     // Add more styles as needed
//   },
//   ViewStyles: {
//     margin: 20,
//   },
//   textStyles: {
//     fontSize: 24,
//     margin: 20,
//   },
// };
// export default CarList;

//

// class MovieList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cars: [], // Initialize state to hold fetched data
//       loading: true, // Add loading state
//     };
//   }

//   //life cycle method
//   componentDidMount() {
//     axios
//       .get('https://my-json-server.typicode.com/gunjan-keswani/cars/cars')
//       .then(response => {
//         this.setState({cars: response.data, loading: false});
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }
//   renderList = () => {
//     return this.state.cars.map(brand => {
//       return <MovieDetails key={brand.model[1].name} brand={brand} />;
//     });
//   };
//   render() {
//     return (
//       <>
//         {/* <View>{this.renderList()}</View> */}
//         <ScrollView>{this.renderList()}</ScrollView>
//       </>
//     );
//   }
// }

// const styles = {
//   headerText: {
//     backgroundColor: 'black',
//     fontSize: 30,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     color: 'white', // Change the color to your preference
//     textAlign: 'center',
//     padding: 10,
//     borderRadius: 5,
//     // Add more styles as needed
//   },
//   ViewStyles: {
//     margin: 20,
//   },
//   textStyles: {
//     fontSize: 24,
//     margin: 20,
//   },
// };
// export default MovieList;

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [], // Initialize state to hold fetched data
      loading: true, // Add loading state
    };
  }

  // Life cycle method
  componentDidMount() {
    axios
      .get(
        'https://my-json-server.typicode.com/SoparkarSharvari/Movies/movies',
        {
          maxContentLength: 1000000, // Correctly placed inside the configuration object
        },
      )
      .then(response => {
        this.setState({movies: response.data, loading: false});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  renderList = () => {
    return this.state.movies.map(Title => {
      return <MovieDetails key={Title.id} Title={Title} />;
    });
  };

  render() {
    return (
      <ScrollView>
        {this.state.loading ? <Text>Loading...</Text> : this.renderList()}
      </ScrollView>
    );
  }
}

export default MovieList;
