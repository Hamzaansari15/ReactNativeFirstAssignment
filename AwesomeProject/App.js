import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Login } from './assets/login';
import { Signup } from './assets/signup';

const App = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false)

  const signup = () => {
    setShowLogin(false);
    setShowSignup(true);
  }

  const login = () => {
    setShowLogin(true);
    setShowSignup(false);
  }

  return (
    <>
      <View style={styles.main}>
        {showLogin ? <Login signup={signup}/> : null}
        {showSignup ? <Signup login={login} /> : null}
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4070f4'
  }
})



export default App;
