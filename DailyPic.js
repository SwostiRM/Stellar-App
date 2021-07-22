import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Platform,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class DailyPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=u9ODDXDrPEQez8lNfBUVAKzJvyF4jrjcJqi3oEIJ'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/space.gif')}
          style={styles.backgroundImage}>
          <Text style={styles.TextStyle}>PICTURE OF THE DAY</Text>
          <Text style={styles.routeText}>Astronomy Picture Of The Day</Text>
          <Text style={styles.titleText}>{this.state.apod.title}</Text>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() =>
              Linking.openURL(this.state.apod.url).catch((err) =>
                console.error("Couldn't load page", err)
              )
            }>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: this.state.apod.url }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}></Image>
              <Text style={{ color: 'red', alignSelf: 'center' }}>
                *Click the box if the image is not properly visible*
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.explanationText}>
            {this.state.apod.explanation}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
    marginTop: 10,
    alignSelf: 'center',
  },
  backgroundImage: { flex: 1, resizeMode: 'cover' },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  routeText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fc63ff',
    textAlign: 'center',
  },
  listContainer: {
    backgroundColor: 'rgba(52,52,52,0.8)',
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  explanationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: 'black',
    shadowOpacity: 50,
  },
});
