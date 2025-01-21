import React,{useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const App = () => {
  const searchMovies = async() => {
    const response = await axios.get("http://www.omdbapi.com/?t=National+Treasure");
    console.log(response);
  };
  //useEffect(()=>{searchMovies()},[]);
  //searchMovies();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.storySection}>
          <Text style={styles.sectionTitle}>Stories</Text>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.story}>
              <Image source={require("D:/react/demo/assets/images/storyimage.jpeg")} style={styles.storyImage} />
              <Text style={styles.storyText}>Story 1</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        
        <View style={styles.postsSection}>
          <Text style={styles.sectionTitle}>Posts</Text>
          <View style={styles.post}>
            <Image source={require("D:/react/demo/assets/images/post0.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post1.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post2.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post3.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post4.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post5.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post6.jpeg")} style={styles.postImage} />
            <Image source={require("D:/react/demo/assets/images/post7.jpeg")} style={styles.postImage} />



          </View>
          
        </View>

      </ScrollView>

      
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("D:/react/demo/assets/images/homeicon.jpeg")}
          style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("D:/react/demo/assets/images/search.jpeg")} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("D:/react/demo/assets/images/plusicon.jpeg")} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("D:/react/demo/assets/images/reelsicon.jpeg")} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require("D:/react/demo/assets/images/profileicon.jpeg")} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 100, 
  },
  storySection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
  },
  postsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
    
  },
  post: {
    marginBottom: 20,
    flexDirection:"row",
    flexWrap: 'wrap',
    
  },
  postImage: {
    width: '33%',
    height: 300,
    
  },
  bottomNavigation: {
    flexDirection: 'row',
    
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 15,
    borderTopColor: '#ccc',
  },
  iconButton: {
    alignItems: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});

export default App;

