import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import Home from './screens/Home';
import Meteors from "./screens/Meteors"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
          <Stack.Screen name="DailyPictures" component={DailyPic} />
          <Stack.Screen name="StarMap" component={StarMap} />
          <Stack.Screen name="Meteors" component={Meteors}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
