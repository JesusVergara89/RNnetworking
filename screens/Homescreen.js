import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Homescreen({ navigation }) {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >Homescreen</Text>
            <Button title='Go to about' onPress={()=>navigation.navigate('About')} />
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