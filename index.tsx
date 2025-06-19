import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome To</Text>
      <Text style={styles.subtitle}>
        Create an account and access thousand{'\n'}of cool stuffs
      </Text>

      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Do you have an account?{' '}
        <Text style={styles.loginLink} onPress={() => router.push('/login')}>
          Log In
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: '#fff',
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
  title: {
    fontSize: width < 400 ? 24 : 32,
    fontWeight: '700',
    color: '#174ea6',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  getStartedButton: {
    backgroundColor: '#174ea6',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
    maxWidth: 300,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#444',
  },
  loginLink: {
    color: '#174ea6',
    fontWeight: '600',
  },
});
