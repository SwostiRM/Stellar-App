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
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class SpaceCraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
      aircrafts: '',
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get('https://ll.thespacedevs.com/2.2.0/config/spacecraft/')
      .then((response) => {
        this.setState({ aircrafts: response.data.results }).catch((error) => {
          console.log(error.message);
        });
      });
  };

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          borderRadius: 20,
        }}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={{
            width: 200,
            height: 200,
            marginTop: 15,
            marginBottom: 15,
            marginRight: 10,
          }}></Image>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: '#696969' }}>{item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text
          style={{
            color: '#a9a9a9',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5,
          }}>
          {item.agency.description}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View styles={{ marginTop: 50 }}>
          <Text styles={styles.TextStyle}>SPACE CRAFT</Text>
        </View>
        <View styles={{ flex: 0.75 }}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.aircrafts}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  TextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'aqua',
    alignSelf: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
