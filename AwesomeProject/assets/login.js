import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Login = () => {
 

    return (
    <View style={styles.container}>
      <Text style={styles.welcomeHeading}>WELCOME</Text>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    welcomeHeading: {
      fontSize: 50,
      marginTop: 20,
      fontWeight: 'bold',
      color: '#054aeb',
      letterSpacing: 2,
      // fontFamily: 'Poppins-Bold'
    }
  })

