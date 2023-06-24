import React from 'react'
import { Text, SafeAreaView } from 'react-native'

export default function SettingsScreen(){
  const goToSettings = () => {
    navigation.navigate("Home")
  }
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  )
}