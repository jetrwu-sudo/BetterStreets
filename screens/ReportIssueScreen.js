import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { supabase } from '../supabase';

export default function ReportIssueScreen({ navigation, route }) {
  const [issueTitle, setIssueTitle] = useState(route.params?.issueTitle || '');
  const [description, setDescription] = useState(route.params?.description || '');
  const [location, setLocation] = useState(route.params?.location || null);
  const [category, setCategory] = useState(route.params?.category || 'Maintenance');

  useEffect(() => {
    if (route.params?.location) {
      setLocation(route.params.location); // Update location when coming back from location screen
    }
  }, [route.params?.location]);

  const handleSubmit = async () => {
    console.log('Submit clicked');  // Debugging line to see if submit button is triggered
    console.log('Before Submit:', { category, description, issueTitle, location });  // Check state before submitting

    // Check if the user is authenticated
    const user = supabase.auth.user();
    console.log("Authenticated User:", user); // Log the user object to verify
    if (!user) {
      Alert.alert("Error", "No user is logged in.");
      return;
    }

    if (!issueTitle.trim() || !description.trim() || !location) {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
      return;
    }
    
    // Log the data before submitting
    console.log('Submitting Report:', { category, description, issueTitle, location });

    const { data, error } = await supabase
      .from('reports')
      .upsert([  // Changed from insert to upsert
        {
          title: issueTitle,
          description: description,
          latitude: location.latitude,
          longitude: location.longitude,
          status: 'Pending',
          category: category,
          user_id: user.id,  // Use the logged-in user id
        },
      ]);

    // Log the response from the database
    console.log('Report Data:', data);  // Logs the inserted report data
    console.log('Report Error:', error);  // Logs any error returned from Supabase

    if (error) {
      Alert.alert('Error', 'Failed to submit report');
    } else {
      Toast.show({
        type: 'success',
        text1: 'Report Submitted!',
        text2: 'Your issue has been successfully reported.',
      });

      navigation.navigate('IssueDetailsScreen', {
        issueTitle,
        description,
        location,
        category,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Report an Issue</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Issue Title</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Pothole on Main Street"
          value={issueTitle}
          onChangeText={setIssueTitle}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the issue in detail"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Text style={styles.label}>Category</Text>
        <View style={styles.categoryButtons}>
          {['Maintenance', 'Safety', 'Cleanliness', 'Other'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryButton, category === cat && styles.selectedCategory]}
              onPress={() => setCategory(cat)}
            >
              <Text style={styles.buttonText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('SelectLocationScreen', { returnScreen: 'ReportIssueScreen', issueTitle, description, category, location })
          }
        >
          <Text style={styles.buttonText}>
            {location ? `Selected: Lat ${location.latitude}, Lng ${location.longitude}` : 'Select Location'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.footerText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Text style={styles.footerText}>🗺️ Map</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UpdatesScreen')}>
          <Text style={styles.footerText}>🔔 Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.footerText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#1A237E' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 },
  formContainer: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16 },
  label: { fontSize: 16, color: '#1A237E', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 8, marginBottom: 16, backgroundColor: '#F5F5F5' },
  textArea: { height: 100, textAlignVertical: 'top' },
  categoryButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  categoryButton: { backgroundColor: '#E0E0E0', padding: 12, borderRadius: 8, width: '22%' },
  selectedCategory: { backgroundColor: '#3F51B5' },
  button: { backgroundColor: '#3F51B5', borderRadius: 25, padding: 12, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  submitButton: { backgroundColor: '#FF6F00', borderRadius: 25, padding: 16, alignItems: 'center' },
  submitText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3F51B5', height: 70, position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 10 },
  footerText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
});
