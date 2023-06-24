import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ToDoScreen from '../screens/ToDoScreen';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

/* Enrutador de Screens */

export default function NavigationTab(){
  return (
    <Tab.Navigator initialRouteName='ToDo' {...{screenOptions}}>
        <Tab.Screen
          name='Home'
          options={{headerShown: true,
          tabBarIcon: ({color, size})=>(
            <Feather name='home' color={color} size={size}></Feather>
          )}}
          component={HomeScreen}
        />
        <Tab.Screen 
          name='Settings' 
          component={SettingsScreen}
          options={{tabBarIcon:({color, size})=>( 
            <Feather name='settings' color={color} size={size}></Feather>)}}
        />
        <Tab.Screen
          name='ToDo'
          component={ToDoScreen}
          options={{tabBarIcon: ({color, size})=> (
            <MaterialCommuityIcons name='clipboard-list-outline' color={color} size={size}></MaterialCommuityIcons>
          )}}
        />
    </Tab.Navigator>
  )
}

const screenOptions = {
  tabBarStyle:{
    backgroundColor:'#403D39',
    padding: 10,
    height: 70
  },
  tabBarItemStyle:{
    backgroundColor:'#CCC5B9',
    margin:5,
    borderRadius:10
  }
};