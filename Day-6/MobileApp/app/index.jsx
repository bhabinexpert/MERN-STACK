import { Text, View } from "react-native";
import "../global.css"
import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false;

  if (!isLoggedIn){
    return <Redirect href = '/auth/login' />;
  }
  
  return (
    <View>
      <Text> Hello World</Text>
    </View>
  );
}
