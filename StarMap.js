import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
    };
  }

  render() {
    const { longitude, latitude } = this.state;
    const path =
      'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition+false';
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.SafeAreaStyle}/>
        <Text style={styles.TextStyle}>STAR MAP SCREEN</Text>
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: 'black',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 50,
          }}
          placeholder="Enter your latitude"
          placeholderTextColor="#000"
          onChangeText={(text) => {
            this.setState({
              latitude: text,
            });
          }}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: 'black',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 30,
            borderRadius: 50,
          }}
          placeholder="Enter your longitude"
          placeholderTextColor="#000"
          onChangeText={(text) => {
            this.setState({
              longitude: text,
            });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  TextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gold',
    marginTop: 10,
    alignSelf: 'center',
  },
  SafeAreaStyle:{ marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,}
});
