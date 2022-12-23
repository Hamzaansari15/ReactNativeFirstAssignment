import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const Signup = (props) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.loginModal}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name Here ..."
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email Here ..."
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password Here ..."
            keyboardType="default"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.signupLink}>Already have an account?<Text onPress={props.login} style={{ color: '#4070f4',fontSize: 16, fontWeight: 'bold' }}> Login</Text></Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  loginModal: {
    width: 340,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: 280,
    height: 50,
    backgroundColor: 'white',
    marginTop: 36,
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: '#4070f4'
  },
  button: {
    backgroundColor: '#4070f4',
    fontSize: 24,
    marginTop: 28,
    width: 120,
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
  text: {
    fontSize: 32
  },
  signupLink: {
    marginTop: 20,
    fontSize: 16
  }
})

export { Signup }