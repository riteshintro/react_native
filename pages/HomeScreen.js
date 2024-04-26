import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { getAllReview, getPostDat, getReview, listCompany } from '../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Card = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
     <View style={styles.imageContainer}><Image source={image} style={styles.cardImage} /><Text><Entypo name="star" size={24} color="#FFC000" /><Entypo name="star" size={24} color="#FFC000" /><Entypo name="star" size={24} color="#FFC000" /><Entypo name="star" size={24} color="#FFC000" /><Entypo name="star" size={24} color="#FFC000" /></Text></View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
};

const CardList = ({ data }) => {
  return (
        <ScrollView style={styles.cardList}  showsVerticalScrollIndicator={false}>
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} image={item.image} />
      ))}
      </ScrollView>
  );
};

const HomeScreen = () => {
  const [cardData, setCardData] = React.useState([
    { id: 1, title: 'Ritesh Maurya', description: 'This is the first card description. This is the first card description. This is the first card description. This is the first card description. This is the first card description.', image: require('../assets/dashboard/airbnb.png') },
    { id: 2, title: 'Abhishek Singh', description: 'This is the second card description. This is the second card description. This is the second card description. This is the second card description. This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    { id: 3, title: 'Abhishek Singh', description: 'This is the second card description. This is the second card description. This is the second card description. This is the second card description. This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    { id: 4, title: 'Abhishek Singh', description: 'This is the second card description. This is the second card description. This is the second card description. This is the second card description. This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    { id: 5, title: 'Abhishek Singh', description: 'This is the second card description. This is the second card description. This is the second card description. This is the second card description. This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    { id: 6, title: 'Abhishek Singh', description: 'This is the second card description. This is the second card description. This is the second card description. This is the second card description. This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    // Add more card data objects as needed
  ]);
  // useEffect(() => {
  //   AsyncStorage.getItem("token").then((value) => { 
  //     const token = JSON.parse(value);
  //     getAllReview(token).then((res)=>{
  //       console.log(res,"respose")
  //      })
  //   //  console.log(token)
  //   }).catch((error) => {
  //     console.error("Error retrieving token:", error);
  //   });
  // }, []);
  // const token = JSON.parse(AsyncStorage.getItem("token"));
  // console.log(token)
useEffect(()=>{
  // listCompany().then((res)=>{
  //   console.log(res)
  //  })
   AsyncStorage.getItem("token").then((value) => { 
    const token = JSON.parse(value);
    listCompany(token).then((res)=>{
      console.log(res,"respose")
     })
  //  console.log(token)
  }).catch((error) => {
    console.error("Error retrieving token:", error);
  });
},[]) 
  return (
    <View style={styles.container}>
      <CardList data={cardData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding:0, 
    backgroundColor:"#f6efe0",
    paddingLeft:20,
    paddingRight:20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 5,
    marginTop:10,
    padding: 15,
    // alignItems: 'center',
  },

//   imageContainer:{
//   // flex:1,
//   // justifyContent:"space-between",
//   // alignItems:'flex-start',
// marginBottom:80
//   },
  imageContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center',
    marginBottom:10
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default HomeScreen