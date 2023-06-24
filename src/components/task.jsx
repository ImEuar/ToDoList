import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Task({info, priority}) {
    let backgroundColor;
    if(priority < 4){
        backgroundColor = '#2f402d'
    } else if(priority < 7){
        backgroundColor = '#403c2d'
    } else if(priority >= 7){
        backgroundColor = '#402d2d'
    }
    const cardStyle = StyleSheet.create({
        card:{
            backgroundColor: backgroundColor,
            borderRadius: 15,
            padding: 10,
            width: 350,
            margin: 8
        }
    })
  return (
    <View>
        <View style={cardStyle.card}>
                    <Text style={styles.text}>{info}</Text>
                    <View style={styles.details}>
                        <Text style={styles.text1}>Investigar 2 teorías</Text>
                        <Text style={styles.text3}>prioridad: {priority}</Text>
                    </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    text3:{
        color: '#CCC5B9',
        fontSize: 12,
        marginLeft: 65,
        marginBottom: 12,
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})