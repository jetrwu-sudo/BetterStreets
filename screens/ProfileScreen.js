import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { supabase } from '../supabase';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Welcome, {user.email}</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <Text style={styles.text}>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});
