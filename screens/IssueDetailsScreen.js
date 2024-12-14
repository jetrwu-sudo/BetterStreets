import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the location icon

export default function IssueDetailsScreen({ route, navigation }) {
  const { issueTitle, description, location } = route.params || {};
  const [updateText, setUpdateText] = useState('');
  const [commentText, setCommentText] = useState(''); // Separate comment state
  const [comments, setComments] = useState([]);
  const [updateList, setUpdateList] = useState([]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText(''); // Clear comment input
    } else {
      Alert.alert('Error', 'Please enter a comment');
    }
  };

  const handleAddUpdate = () => {
    if (updateText.trim()) {
      const newUpdate = {
        text: updateText,
        timestamp: new Date().toLocaleString(),
      };
      setUpdateList([...updateList, newUpdate]);
      setUpdateText(''); // Clear update input
    } else {
      Alert.alert('Error', 'Please enter an update');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.issueTitle}>{issueTitle}</Text>
      <Text style={styles.issueDescription}>{description}</Text>

      {/* Location Icon */}
      <View style={styles.locationContainer}>
        <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        <Text style={styles.locationText}>
          {location ? `Lat: ${location.latitude}, Lng: ${location.longitude}` : 'No location available'}
        </Text>
      </View>

      {/* Updates Section */}
      <Text style={styles.sectionTitle}>Updates</Text>
      <TextInput
        style={styles.updateInput}
        placeholder="Add an update..."
        value={updateText}
        onChangeText={setUpdateText}
      />
      <TouchableOpacity style={styles.addUpdateButton} onPress={handleAddUpdate}>
        <Text style={styles.addUpdateButtonText}>Add Update</Text>
      </TouchableOpacity>

      <View style={styles.updateList}>
        {updateList.map((update, index) => (
          <View key={index} style={styles.updateItem}>
            <Text style={styles.updateText}>{update.text}</Text>
            <Text style={styles.timestamp}>{update.timestamp}</Text>
          </View>
        ))}
      </View>

      {/* Comments Section */}
      <Text style={styles.sectionTitle}>Comments</Text>
      <TextInput
        style={styles.commentInput}
        placeholder="Add a comment..."
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity style={styles.addCommentButton} onPress={handleAddComment}>
        <Text style={styles.addCommentButtonText}>Add Comment</Text>
      </TouchableOpacity>

      <View style={styles.commentList}>
        {comments.map((comment, index) => (
          <Text key={index} style={styles.commentText}>{comment}</Text>
        ))}
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
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  issueTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3F51B5',
    marginBottom: 10,
  },
  issueDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3F51B5',
  },
  updateInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addUpdateButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  addUpdateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateList: {
    marginBottom: 20,
  },
  updateItem: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
    elevation: 3,
  },
  updateText: {
    fontSize: 14,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#B0B0B0',
    marginTop: 5,
  },
  commentInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addCommentButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  addCommentButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentList: {
    marginBottom: 20,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
