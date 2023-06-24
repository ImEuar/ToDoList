import React, { useState } from 'react'
import Task from '../components/task'
import { Text, SafeAreaView, View, StyleSheet, Image, Button, Pressable, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'

export default function ToDoScreen({navigation}){
    const goToScreen = (screen) => {
        navigation.navigate(screen)
    }

    const [tasks, setTasks] = useState([

    ])
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState('')
    const addTask = ()=>{
      setTasks([...tasks, {title: task, priority: priority}]);
      setTask('');
      setPriority(1);
    }
    
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>ToDo List</Text>
      <KeyboardAvoidingView
        style={styles.addTaskGroup}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput placeholderTextColor={'#CCC5B9'} onChangeText={(text)=> setTask(text)} value={task} placeholder='Agregar tarea' style={styles.input}></TextInput>
        <View style={styles.picker}>
          <Picker
            selectedValue={priority}
            onValueChange={(item, i) => setPriority(item)}
            style={styles.picker1}
          >
            <Picker.Item label='1' value={1}></Picker.Item>
            <Picker.Item label='2' value={2}></Picker.Item>
            <Picker.Item label='3' value={3}></Picker.Item>
            <Picker.Item label='4' value={4}></Picker.Item>
            <Picker.Item label='5' value={5}></Picker.Item>
            <Picker.Item label='6' value={6}></Picker.Item>
            <Picker.Item label='7' value={7}></Picker.Item>
            <Picker.Item label='8' value={8}></Picker.Item>
            <Picker.Item label='9' value={9}></Picker.Item>
            <Picker.Item label='10' value={10}></Picker.Item>
          </Picker>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={addTask}>
            <Text style={styles.text2}>+</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={{marginBottom: 10}}>
          {
              tasks.length === 0 ? (
                  <Text style={styles.text4}>Aún no tienes tareas pendientes.</Text>
              ) : (
                <View>
                  {
                    tasks.sort((p1, p2)=>(p1.priority < p2.priority) ? 1 : (p1.priority > p2.priority) ? -1 : 0).map(({title, priority}, i)=>{
                      return(
                        <TouchableOpacity key={i}>
                          <Task info={title} priority={priority}></Task>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              )
          }
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#252422',
      alignItems: 'center'
    },
    title: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      margin: 30,
      fontWeight: 'bold'
    },
    text:{
      color: '#FFFCF2',
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold'
    },
    text1:{
      color: '#CCC5B9',
      fontSize: 18,
      marginLeft: 12,
      marginBottom: 12,
      marginRight: 20
    },
    text2:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    text3:{
        color: '#CCC5B9',
        fontSize: 12,
        marginLeft: 12,
        marginBottom: 12,
    },
    text4:{
        color: '#CCC5B9',
        fontSize: 20,
        margin: 10,
        marginTop: '30%'
    },
    card:{
      backgroundColor: '#403D39',
      borderRadius: 15,
      padding: 10,
      width: 350
    },
    image: {
      width: 150,
      height: 150
    },
    buttons:{
      flexDirection: 'row',
      alignSelf: 'center',
      marginLeft: 10
    },
    button: {
      backgroundColor: '#EB5E28',
      width: 50,
      borderRadius: 10
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
      marginBottom: 10,
      borderBottomColor: '#CCC5B9',
      color: '#FFFCF2',
      borderBottomWidth: 2,
      width: '50%',
      height: 60,
      padding: 10
    },
    addTaskGroup:{
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    picker: {
      alignItems: "center"
    },
    picker1: {
      width: 90,
      color: '#FFFCF2'
    }
  })