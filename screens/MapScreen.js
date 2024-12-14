import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { supabase } from '../supabase';

export default function MapScreen() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const { data, error } = await supabase.from('reports').select('*');
      if (error) {
        console.error(error);
      } else {
        setIssues(data);
      }
    };
    fetchIssues();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {issues.map((issue) => (
          <Marker
            key={issue.id}
            coordinate={{ latitude: issue.latitude, longitude: issue.longitude }}
            title={issue.title}
            description={issue.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
