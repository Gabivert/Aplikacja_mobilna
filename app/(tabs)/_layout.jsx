import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-3 h-3"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>  
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen name="home"
        options={{
          title: 'Strona główna',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Strona główna"
              focused={focused}
            />
          )
        }}/> 
      <Tabs.Screen name="addCar"
        options={{
          title: 'Pojazdy',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.car}
              color={color}
              name="Pojazdy"
              focused={focused}
            />
          )
        }}/> 
      <Tabs.Screen name="services"
      options={{
        title: 'Usługi',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
            icon={icons.home}
            color={color}
            name="Usługi"
            focused={focused}
          />
        )
      }}/> 
    <Tabs.Screen name="profile"
        options={{
          title: 'Profil',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Profil"
              focused={focused}
            />
          )
        }}/> 
      </Tabs>
    </>
  )
}

export default TabsLayout