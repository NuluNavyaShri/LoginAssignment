import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SuccessScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.message}>✅ Successfully Logged In!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: '#f4f8fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  message: {
    fontSize: width < 400 ? 20 : 26,
    fontWeight: '700',
    color: '#2ecc71',
    textAlign: 'center',
  },
});
