import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function ReportIssueScreen({ navigation }) {
  const [issueTitle, setIssueTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
<TouchableOpacity
  onPress={() => navigation.navigate('HomeScreen')}
  style={styles.submitButton}
>
  <Text style={styles.submitText}>Submit Report</Text>
</TouchableOpacity>
      <Text style={styles.heading}>Report an Issue</Text>
      <Text style={styles.subheading}>
        Let us know about a problem in your area. Adding detailed information helps resolve it faster.
      </Text>

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
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Location</Text>
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>123 Main Street (Auto-detected)</Text>
        </View>

        <View style={styles.photoBox}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1519500099198-fd81846b8f03?w=500&h=500',
            }}
            style={styles.imagePreview}
          />
          <Text style={styles.photoText}>Adjust Location</Text>
        </View>

        <View style={styles.photoBox}>
          <Text style={styles.photoText}>Add Photos</Text>
          <Text style={styles.photoOptional}>Optional</Text>
        </View>

        <TouchableOpacity
          onPress={() => console.log('Report Submitted')}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1A237E',
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 16,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  label: {
    fontSize: 16,
    color: '#1A237E',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  locationBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
  },
  locationText: {
    color: '#1A237E',
  },
  photoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    height: 150,
    marginBottom: 16,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  photoText: {
    color: '#1A237E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoOptional: {
    color: '#E0E0E0',
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 25,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
