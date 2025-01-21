import react from 'react';
import {View,Text,Button,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';

export default function HomeScreen() {
    return(
        <ScrollView style={styles.main}>
        <View style={styles.profileHeader}>
            <Image source={require('../../assets/images/Pinkpp.jpeg')} style={styles.profilePic}/>
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>123</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style ={styles.statBox}>
                    <Text style={styles.statNumber}>2.2K</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statBox}>
                <Text style ={styles.statNumber}>50</Text>
                <Text style={styles.statLabel}>Following</Text></View>
            </View>

         </View>

         <View style={styles.bioSection}>
            <Text style={styles.name}>strawberry.piee</Text>
            <Text style={styles.bio}>for those who get me without judgement|you are not added here for a reason|not romanticizing my life anymore</Text>
            <Text style={styles.contactInfo}>Email:mindyourownbusiness@gmail.com</Text>
            <Text style={styles.contactInfo}>Phone no: nahi bata rahi hun</Text>
         </View>
 {/*--------------------- view /touchableOpacity/images/--------------------------------- */}
 <View style={styles.highlight}>
  <TouchableOpacity style={styles.highlightButton}>
  <Image source={require('../../assets/images/high3.jpeg')} style={styles.himage}/>
  </TouchableOpacity>
  <TouchableOpacity style={styles.highlightButton}>
  <Image source={require('../../assets/images/high4.jpeg')} style={styles.himage}/>
  </TouchableOpacity>
  <TouchableOpacity style={styles.highlightButton}>
  <Image source={require('../../assets/images/high5.jpeg')} style={styles.himage}/>
  </TouchableOpacity>
  </View> 


 
 
         <Text style={styles.sectionTitle}>Posts</Text>
         <View style={styles.postsContainer}>
        {/* post */}
           <View style={styles.postBox}>
            <Image
              source={require('../../assets/images/Аватарка.jpeg')}
              style={styles.postImage}
            />
          </View>
          <View style={styles.postBox}>
            <Image
              source={require('../../assets/images/high0.jpeg')}
              style={styles.postImage}
            />
          </View>
          <View style={styles.postBox}>
            <Image
              source={require('../../assets/images/high1.jpeg')}
              style={styles.postImage}
            />
          </View>
          <View style={styles.postBox}>
            <Image
              source={require('../../assets/images/high2.jpeg')}
              style={styles.postImage}
            />
          </View>
       
       </View>   
    </ScrollView>

);
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 40,
      marginRight: 15,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
    },
    statBox: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#777',
      },
      bioSection: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      bio: {
        fontSize: 20,
        color: '#555',
        marginBottom: 10,
      },
      contactInfo: {
        fontSize: 18,
        color: '#555',
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10,
      },
      postsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:1,flex:1,
        // justifyContent: 'space-between',
        paddingHorizontal: 1,
      },
      postBox: {
        width: '32%',
        marginBottom: 1,
        resizeMode: "contain",
        height: 500,
      },
      postImage: {
        resizeMode: "contain",
        width:"100%",
        borderWidth: 5,
        borderRadius:1,
        height: 500,
  },
    highlight: {
     height:100,
     flexDirection:"row",
     justifyContent:"space-around",


    },
    highlightButton: {
      // height: "5%",
    },
    himage: {
      width: 100,
     borderRadius:50,
     height:"100%",
     resizeMode:"contain",
     borderWidth: 4,
     borderColor: "black",
    },
    
    });
    
  


   