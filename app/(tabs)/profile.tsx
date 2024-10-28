import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { icons } from '../../constants';
import { signOut } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';
import { router } from 'expo-router';

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/sign-in');
  };

  return (
    <View className="w-full px-20" style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 0 }}>

      {/* Wyświetlenie informacji o użytkowniku */}
      {user && (
        <View className="mb-4">
          <Text className="text-lg font-bold">{user.username}</Text>
          <Text className="text-gray-600">{user.email}</Text>
        </View>
      )}

      {/* Przycisk wylogowania */}
      <TouchableOpacity 
        className="w-full items-center bg-red-500 py-3 rounded-md"
        onPress={logout}
      >
        <Text className="text-white font-semibold">Wyloguj się</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({});
