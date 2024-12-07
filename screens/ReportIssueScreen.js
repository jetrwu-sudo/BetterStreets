import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function ReportIssueScreen({ navigation, route }) {
  const [issueTitle, setIssueTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(route.params?.location || null);

  const handleSubmit = () => {
    if (!issueTitle.trim() || !description.trim() || !location) {
      Alert.alert('Error', 'Please fill out all fields before submitting.');
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Report Submitted!',
      text2: 'Your issue has been successfully reported.',
    });

    navigation.navigate('IssueDetailsScreen', {
      issueTitle,
      description,
      location,
    });
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
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('SelectLocationScreen', { returnScreen: 'ReportIssueScreen' })
          }
        >
          <Text style={styles.buttonText}>
            {location
              ? `Selected: Lat ${location.latitude}, Lng ${location.longitude}`
              : 'Select Location'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
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
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#3F51B5', borderRadius: 25, padding: 12, alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  submitButton: { backgroundColor: '#FF6F00', borderRadius: 25, padding: 16, alignItems: 'center' },
  submitText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  footerText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
});
