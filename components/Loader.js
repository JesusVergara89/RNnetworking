import { View, ActivityIndicator, StyleSheet,Text } from 'react-native'


export default function Loader() {
    return ( 
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});