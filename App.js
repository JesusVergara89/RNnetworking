import axios from 'axios';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList,Text } from 'react-native';
import Card from './components/Card';

export default function App() {

  const [data_, setData] = useState([])

  const fetchData = (limit = 10) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    axios.get(URL)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.listContainer}>
        <FlatList
          data={data_}
          renderItem={({ item }) => {
            return (<Card item={item} />)
          }}
          ItemSeparatorComponent={() => {
            return (<View style={{ height: 16 }} />)
          }}
          ListEmptyComponent={<Text>No items found</Text>}
          ListHeaderComponent={<Text style={styles.titleText} >Post list</Text>}
          ListFooterComponent={<Text style={styles.titleText} >End list</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    margin: "auto"
  },
  titleText: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  }
});
