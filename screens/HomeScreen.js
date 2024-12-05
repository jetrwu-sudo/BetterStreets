import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://images.unsplash.com/photo-1711433544613-dc9eb566a46a?w=500&h=500',
            }}
          />
          <Text style={styles.title}>BetterStreets</Text>
          <Text style={styles.subtitle}>
            Report issues in your community and track their resolutions. Let's build a better city together.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ReportIssueScreen')} // Navigate to ReportIssueScreen
          >
            <Text style={styles.buttonText}>Report an Issue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOutlined}
            onPress={() => console.log('View Issues Pressed')}
          >
            <Text style={styles.buttonOutlinedText}>View Issues</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Reports</Text>
          <View style={styles.reportItem}>
            <View style={styles.reportIconContainer}>
              <Text style={styles.reportIcon}>🚧</Text>
            </View>
            <View style={styles.reportDetails}>
              <Text style={styles.reportTitle}>Pothole on Main Street</Text>
              <Text style={styles.reportSubtitle}>Reported 2 hours ago</Text>
            </View>
            <View style={styles.reportStatusContainer}>
              <Text style={styles.reportStatus}>In Progress</Text>
            </View>
          </View>

          <View style={styles.reportItem}>
            <View style={styles.reportIconContainer}>
              <Text style={styles.reportIcon}>💡</Text>
            </View>
            <View style={styles.reportDetails}>
              <Text style={styles.reportTitle}>Street Light Out</Text>
              <Text style={styles.reportSubtitle}>Reported 5 hours ago</Text>
            </View>
            <View style={styles.reportStatusContainerResolved}>
              <Text style={styles.reportStatusResolved}>Resolved</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navItem}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>🗺️ Map</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>🔔 Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A237E',
  },
  scrollView: {
    flexGrow: 1,
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333333',
  },
  button: {
    backgroundColor: '#3F51B5',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOutlined: {
    borderColor: '#3F51B5',
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonOutlinedText: {
    color: '#3F51B5',
    fontSize: 18,
  },
  reportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 10,
  },
  reportIconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    borderRadius: 30,
  },
  reportIcon: {
    fontSize: 30,
  },
  reportDetails: {
    flex: 1,
    marginLeft: 15,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  reportSubtitle: {
    fontSize: 14,
    color: '#757575',
  },
  reportStatusContainer: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 5,
  },
  reportStatus: {
    color: '#FF6F00',
    fontSize: 12,
  },
  reportStatusContainerResolved: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 5,
  },
  reportStatusResoalved: {
    color: '#2E7D32',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 80,
    elevation: 8,
  },
  navItem: {
    fontSize: 16,
    color: '#3F51B5',
  },
});
