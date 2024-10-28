import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'; 
import { Link } from 'expo-router';

const SignInEmployee = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })
  const [IsSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
  };
  

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[100vh] px-4 my-6">
          {/* <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" /> */}
          <Text className="text-lg text-white text-semibold mt-10 font-psemibold w-[450px] h-[100px]">Zaloguj się na służbowe konto</Text>
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
              <Link href="/sign-in" className="text-lg font-psemibold text-lime-500">Powrót do panelu klienta</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}

export default SignInEmployee