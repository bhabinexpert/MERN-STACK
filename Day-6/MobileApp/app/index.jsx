import { Text, View } from "react-native";
import "../global.css"
import {  Redirect, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const isLoggedIn = false;

  if (!isLoggedIn){
    return <Redirect href = '/auth/login' />;
  }

  const verifyToken = async()=>{
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:9000/",{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });

      if(response.status === 200){
        router.replace("/home/homePage");
      }
      console.log(response)

      
    } catch (error) {
      console.log(error);
      if(error.status=== 400){
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
      }
      
    }
  };
  useEffect(()=>{
    verifyToken();
  },[]);

  
  return (
    <View>
      <Text> Hello World</Text>
    </View>
  );
}
