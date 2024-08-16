import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Aboutscreen({ navigation, route }) {

    const { name } = route.params

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: name
        })
    },[navigation, name])

    return (
        <View style={styles.container} >
            <Text style={styles.text} >Aboutscreen {name}</Text>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home',{
                result: 'this come from About'
            })} />
            <Button title='Update name' onPress={() => navigation.setParams({
                name: 'in guadalaja'
            })} />
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