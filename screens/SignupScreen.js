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
  Alert
} from 'react-native';
import { supabase } from '../supabase'; // Import Supabase client

export default function SignupScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !fullName || password !== confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields and ensure passwords match.');
      return;
    }

    try {
      // Directly insert user data into 'users' table, UUID is auto-generated
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ full_name: fullName, email, password }]); // 'id' is auto-generated as UUID

      if (insertError) {
        Alert.alert('Signup Error', insertError.message);
        return;
      }

      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('LoginScreen');  // Navigate to the login screen after successful signup
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://your-logo-url-here' }}
          />
          <Text style={styles.title}>BetterStreets</Text>
          <Text style={styles.subtitle}>Become part of BetterStreets and help make your community a better place</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.signupText}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#B0B0B0"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
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
  signupText: {
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
    width: '100%',
  },
  signupButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    marginBottom: 10,
  },
  loginButton: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
