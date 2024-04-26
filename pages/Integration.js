import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, image }) => {
  return (
    <View style={styles.card}>
      {image && <Image source={image} style={styles.cardImage} />}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
};

const CardList = ({ data }) => {
  return (
    <View style={styles.cardList}>
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} image={item.image} />
      ))}
    </View>
  );
};

const Integration = () => {
  const [cardData, setCardData] = React.useState([
    { id: 1, title: 'Card 1', description: 'This is the first card description.', image: require('../assets/dashboard/airbnb.png') },
    { id: 2, title: 'Card 2', description: 'This is the second card description.', image: require('../assets/dashboard/amazon.png') },
    // Add more card data objects as needed
  ]);

  return (
    <View style={styles.container}>
      <CardList data={cardData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cardList: {
    // Style the card list container (optional)
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center', // Align content vertically
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  cardContent: {
    flex: 1, // Allow content to fill remaining space
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

export default Integration;
