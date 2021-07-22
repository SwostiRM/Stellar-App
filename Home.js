import * as React from "react";
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
} from "react-native";
import Constants from "expo-constants";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.SafeAreaStyle} />
        <ImageBackground
          style={styles.ImageBgStyle}
          source={require("../assets/stars.gif")}
        >
          <View style={styles.HeaderContainer}>
            <Image
              style={styles.HeaderImageStyle}
              source={require("../assets/main-icon.png")}
            />
            <Text style={styles.TextStyle}>EXPANSE</Text>
          </View>
          <TouchableOpacity
            style={[styles.ButtonStyle, { marginTop: 200 }]}
            onPress={() => {
              this.props.navigation.navigate("StarMap");
            }}
          >
            <Text style={styles.ButtonTextStyle}>STAR MAP</Text>
            <Image
              style={styles.ButtonImageStyle}
              source={require("../assets/star_map.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("SpaceCraft");
            }}
          >
            <Text style={styles.ButtonTextStyle}>SPACE CRAFTS</Text>
            <Image
              style={styles.ButtonImageStyle}
              source={require("../assets/space_crafts.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("DailyPictures");
            }}
          >
            <Text style={styles.ButtonTextStyle}>PIC OF THE DAY</Text>
            <Image
              style={styles.ButtonImageStyle}
              source={require("../assets/daily_pictures.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonStyle}
            onPress={() => {
              this.props.navigation.navigate("Meteors");
            }}
          >
            <Text style={styles.ButtonTextStyle}>METEORS</Text>
            <Image
              style={styles.ButtonImageStyle}
              source={require("../assets/meteor_icon.png")}
            />
          </TouchableOpacity>
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
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    marginRight: 0,
  },
  HeaderImageStyle: {
    position: "absolute",
    width: 180,
    height: 180,
    marginTop: 60,
    marginRight: -190,
  },
  SafeAreaStyle: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ImageBgStyle: { flex: 1, resizeMode: "cover" },
  HeaderContainer: {
    flex: 0.15,
    alignItems: "center",
  },
  ButtonStyle: {
    flex: 0.12,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  ButtonTextStyle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    color: "blue",
  },
  ButtonImageStyle: {
    position: "absolute",
    right: -30,
    top: -20,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
});
