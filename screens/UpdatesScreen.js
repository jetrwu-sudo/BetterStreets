import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { supabase } from '../supabase';

export default function UpdatesScreen() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const { data, error } = await supabase.from('updates').select('*');
      if (error) {
        console.error(error);
      } else {
        setUpdates(data);
      }
    };
    fetchUpdates();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Updates</Text>
      <FlatList
        data={updates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.updateContainer}>
            <Text style={styles.updateTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{new Date(item.updated_at).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  updateContainer: { marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0' },
  updateTitle: { fontSize: 18, fontWeight: 'bold' },
});
