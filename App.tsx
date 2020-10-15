import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShopViewScreen from './screen/ShopViewScreen';
import { Provider, useSelector } from "react-redux";
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ShopViewScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
