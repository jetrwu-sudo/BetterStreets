import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

export default function IssueDetailsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.heading}>Issue Details</Text>

      <View style={styles.card}> 
        <View style={styles.row}>
          <Text style={styles.title}>Pothole on Main Street</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>In Progress</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Large pothole causing traffic slowdown and potential vehicle damage. Located near the intersection with Oak Avenue.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subheading}>Location</Text>
        <View style={styles.row}>
          <Text style={styles.locationText}>123 Main Street, Downtown</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=500&h=500' }}
          style={styles.locationImage}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subheading}>Updates</Text>
        <View style={styles.update}>
          <View style={styles.row}>
            <Text style={styles.updateTitle}>City Maintenance</Text>
            <Text style={styles.timestamp}>2 hours ago</Text>
          </View>
          <Text style={styles.updateText}>
            Maintenance crew has been dispatched to assess the damage and begin repairs.
          </Text>
        </View>
        <View style={styles.update}>
          <View style={styles.row}>
            <Text style={styles.updateTitle}>Traffic Department</Text>
            <Text style={styles.timestamp}>1 day ago</Text>
          </View>
          <Text style={styles.updateText}>
            Traffic cones have been placed around the area. Please drive carefully.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.subheading}>Add Comment</Text>
        <TextInput
          style={styles.input}
          placeholder="Share an update or comment..."
          multiline={true}
          numberOfLines={3}
        />
        <TouchableOpacity
          onPress={() => console.log('Comment Posted')}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Post Comment</Text>
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
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A237E',
  },
  statusContainer: {
    backgroundColor: '#FFF3E0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    color: '#FF6F00',
    fontSize: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#1A237E',
    marginTop: 8,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 8,
  },
  locationText: {
    color: '#1A237E',
  },
  locationImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 8,
  },
  update: {
    marginBottom: 12,
  },
  updateTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A237E',
  },
  updateText: {
    fontSize: 14,
    color: '#1A237E',
    marginTop: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#E0E0E0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
