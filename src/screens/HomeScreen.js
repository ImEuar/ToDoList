import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Button, Pressable } from 'react-native'
import image from '../../assets/img/todo.png'

export default function({navigation}){
  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <SafeAreaView style={styles.container}>{/* IOS */}
      <Text style={styles.title}>¡Hola mundo!</Text>
      <View style={styles.card}>
        <Image style={styles.image} source={image} resizeMode='cover'></Image>
        <Text style={styles.text}>Organízate añadiendo tus tareas aquí.</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={()=>goToScreen('ToDo')}>
          <Text style={styles.text1}>Añadir tarea</Text>
        </Pressable>
        <View style={{margin: 10}}></View>
        <Pressable style={styles.button} onPress={()=>goToScreen('Settings')}>
          <Text style={styles.text1}>Configurar</Text>
        </Pressable>
      </View>
      
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
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  text1:{
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  card:{
    backgroundColor: '#403D39',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: 350
  },
  image: {
    width: 150,
    height: 150
  },
  buttons:{
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20
  },
  button: {
    backgroundColor: '#EB5E28',
    width: 125,
    borderRadius: 5
  }
})