import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'

export default function Aboutscreen({ navigation }) {
  return (
    <View style={styles.container} >
    <Text style={styles.text} >Aboutscreen</Text>
    <Button title='Go to Home' onPress={()=>navigation.navigate('Home')} />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
})