import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { getUserByEmailAndPassword } from './utils';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

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

  const handleLogin = () => {
    if (!email || !password) {
      alert('Both fields are required!');
      return;
    }

    const user = getUserByEmailAndPassword(email, password);

    if (!user) {
      alert('Invalid email or password.');
      return;
    }

    alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
    router.push('/success');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login Now</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#999"
        onChangeText={setEmail}
        value={email}
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
          secureTextEntry={secure}
          placeholderTextColor="#999"
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Ionicons name={secure ? 'eye-off' : 'eye'} size={22} color="#666" />
        </TouchableOpacity>
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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => router.push('/forgot')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#174ea6',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    maxWidth: 500,
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
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
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
  },
  linkText: {
    color: '#174ea6',
    fontSize: 14,
  },
});
