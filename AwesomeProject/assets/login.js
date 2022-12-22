import React from "react";
import { Text, Button, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export const Login = () => {


  const onPress = () => {
    alert('hamza')
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.loginModal}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Here ..."
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email Here ..."
            keyboardType="default"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginModal: {
    width: 340,
    height: 280,
    backgroundColor: '#fee',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 50,
    backgroundColor: 'white',
    marginTop: 36,
    borderRadius: 4,
    padding: 12
  },
  button: {
    backgroundColor: '#035efc',
    fontSize: 24,
    marginTop: 28,
    width: 100,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  text:{
    fontSize: 32
  }
})