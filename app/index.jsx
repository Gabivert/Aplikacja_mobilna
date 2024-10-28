import { Redirect, router } from "expo-router";
import { Text, View, StatusBar, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import React from "react";
import CustomButton from "@/components/CustomButton";
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from '../context/GlobalProvider'

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle = {{ height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Text className="text-3xl text-white font-bold text-center h-[100px]">
            IGJ
          </Text>
          <Image
            source={images.gear}
            className="max-2-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="realtive mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Witamy w naszym systemie!
            </Text>
          </View>
          <CustomButton 
            title="Start"
            handlePress={() => router.push('/sign-in')} 
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
