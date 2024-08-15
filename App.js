import axios from 'axios';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, FlatList, Text, TextInput, Button } from 'react-native';
import Card from './components/Card';
import Loader from './components/Loader';

export default function App() {

  const [data_, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchData = (limit = 10) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    axios.get(URL)
      .then(res => {
        setData(res.data);
        setLoding(true);
        setError('');
      })
      .catch(error => {
        console.error(error);
        setLoding(false);
        setError('Failed to fetch post list');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefresh(true);
    fetchData(20);
    setRefresh(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: postTitle,
      body: postBody
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        const newPost = response.data;
        setData([newPost, ...data_]);
        setPostTitle('');
        setPostBody('');
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError('Failed to post new item');
      })
      .finally(() => {
        setIsPosting(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer} >
          <Text style={styles.errorText} >{error}</Text>
        </View>
      ) : (
        <>
          {loding ? (
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder='Post title' value={postTitle} onChangeText={setPostTitle} />
              <TextInput style={styles.input} placeholder='Post body' value={postBody} onChangeText={setPostBody} />
              <Button title={isPosting ? 'Posting...' : 'Add post'} onPress={addPost} disabled={isPosting} />
            </View>
          ) : (
            <Loader />
          )}
          {loding ? (
            <View style={styles.listContainer}>
              <FlatList
                data={data_}
                renderItem={({ item }) => {
                  return (<Card item={item} />);
                }}
                ItemSeparatorComponent={() => {
                  return (<View style={{ height: 16 }} />);
                }}
                ListEmptyComponent={<Text>No items found</Text>}
                ListHeaderComponent={<Text style={styles.titleText}>Post list</Text>}
                ListFooterComponent={<Text style={styles.titleText}>End list</Text>}
                refreshing={refresh}
                onRefresh={handleRefresh}
              />
            </View>
          ) : null}
        </>
      )}
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
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center"
  },
  errorText: {
    color: "#D8000C",
    fontSize: 18,
    textAlign: "center"
  }
});
