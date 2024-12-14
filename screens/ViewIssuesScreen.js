import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { supabase } from '../supabase';

export default function ViewIssuesScreen() {
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
      <Text style={styles.title}>All Issues</Text>
      <FlatList
        data={issues}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.issueContainer}>
            <Text style={styles.issueTitle}>{item.title}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  issueContainer: { marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0' },
  issueTitle: { fontSize: 18, fontWeight: 'bold' },
});
