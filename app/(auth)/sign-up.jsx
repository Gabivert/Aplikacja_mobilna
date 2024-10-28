import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'; 
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setform] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [IsSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Błąd', 'Proszę wypełnić wszystkie pola')
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      // setUser(result);
      // setIsLogged(true);

      router.replace('/home')
    } catch (error) {
      Alert.alert('Błąd', error.message)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[100vh] px-4 my-6">
          {/* <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" /> */}
          <Text className="text-lg text-white text-semibold mt-10 font-psemibold w-[500px] h-[70px]">Zarejestruj się do systemu</Text>
          <FormField 
            title="Nazwa użytkownika"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, 
              username: e})}
              otherStyle="mt-10"
          />
          <FormField 
            title="Adres e-mail"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, 
              email: e})}
              otherStyle="mt-7"
              keyboardType="email-address"
          />
          <FormField 
            title="Hasło"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, 
              password: e})}
              otherStyle="mt-7"
          />
          <CustomButton 
            title="Zarejestruj się"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={IsSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Masz już konto?
              </Text>
              <Link href="/sign-in" className="text-lg font-psemibold text-lime-500">Zaloguj się</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}

export default SignUp