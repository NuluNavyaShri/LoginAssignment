import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { registerUser } from './utils';

const { width } = Dimensions.get('window');

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getPasswordStrengthColor = (password: string) => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return 'green';
    } else if (password.length >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const passwordStrength = getPasswordStrengthColor(password);

  const handleSignUp = () => {
    if (!email || !password) {
      alert('Both fields are required');
      return;
    }

    const result = registerUser(email, password);

    if (result.success) {
      alert('Account created successfully!');
      router.replace('/login');
    } else {
      alert(result.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholderTextColor="#999"
      />

      <View
        style={[
          styles.passwordInputContainer,
          { borderColor: passwordStrength },
        ]}
      >
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#999"
        />
      </View>

      {password.length > 0 && (
        <Text style={[styles.strengthText, { color: passwordStrength }]}>
          {passwordStrength === 'green'
            ? 'Strong password'
            : passwordStrength === 'orange'
            ? 'Medium strength password'
            : 'Weak password'}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace('/login')}>
        <Text style={styles.link}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.25,
    height: width * 0.25,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#174ea6',
  },
  input: {
    width: '100%',
    maxWidth: 500,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 500,
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  strengthText: {
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#174ea6',
    width: '100%',
    maxWidth: 500,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#174ea6',
    fontSize: 14,
    marginTop: 10,
  },
});
