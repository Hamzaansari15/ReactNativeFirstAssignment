import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Login } from './assets/login';

const App = () => {


  return (
    <>
      <SafeAreaView style={styles.main}>
        <Login />
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#035efc'
  }
})



export default App;
