import { Link } from "expo-router";
import { Text, View, StatusBar } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-light">Witaj w systemie warsztatu!</Text>
      <Link href="../home" style={{color: 'blue'}}>Home</Link>
    </View>
  );
}


