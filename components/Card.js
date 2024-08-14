import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textCard}>{item.title}</Text>
            <Text style={styles.textBody}>{item.body}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100",
        height: 250,
        backgroundColor: '#D5ED9F',
        borderRadius: 16,
        padding: 10
    },
    textCard: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    textBody: {
        textAlign: "center",
        fontSize: 16,
    }
});