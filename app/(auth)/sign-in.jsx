import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'; 
import { Link, router } from 'expo-router';
import { getCurrentUser, signIn } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
    if(!form.email || !form.password) {
      Alert.alert('Błąd', 'Proszę wypełnić wszystkie pola')
    }
    setIsSubmitting(true);
    try {
     await signIn(form.email, form.password);
      const result = await getCurrentUser();
      // setUser(result);
      // setIsLogged(true);
      // Alert.alert("Sukces", "Użytkownik został zalogowany");

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
          <Text className="text-lg text-white text-semibold mt-10 font-psemibold w-[400px] h-[50px]">Zaloguj się do systemu</Text>
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
            title="Zaloguj"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={IsSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Nie masz konta?
              </Text>
              <Link href="/sign-up" className="text-lg font-psemibold text-lime-500">Zarejestruj się</Link>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Służbowe konto?
              </Text>
              <Link href="/sign-in_employee" className="text-lg font-psemibold text-lime-500">Zaloguj się</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}

export default SignIn