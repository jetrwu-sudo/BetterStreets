import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import { supabase } from '../supabase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Login Failed', error.message);
    } else {
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://www.canva.com/design/DAGZOur4VcQ/6IQPOFbZAQNOk8p5UOcsRw/view?utm_content=DAGZOur4VcQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hef97289d81',
            }}
          />
          <Text style={styles.title}>BetterStreets</Text>
          <Text style={styles.subtitle}>
            Making our community better, one street at a time
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#B0B0B0"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.visibilityToggle}
            >
              <Text>{passwordVisible ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.signupButton}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
    width: '100%',  // Make it full width
  },  
  passwordContainer: {
    position: 'relative',
    width: '100%', // Ensure it's the same width as the other inputs
  },  
  visibilityToggle: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  loginButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 15,
    width: '100%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPasswordText: {
    color: '#3F51B5',
    textAlign: 'center',
    marginTop: 10,
  },
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    marginBottom: 10,
  },
  signupButton: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
