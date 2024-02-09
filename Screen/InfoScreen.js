import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const InfoScreen = () => {
  const [expandedRectangles, setExpandedRectangles] = useState([]);

  const toggleRectangleHeight = index => {
    if (expandedRectangles.includes(index)) {
      setExpandedRectangles(expandedRectangles.filter(item => item !== index));
    } else {
      setExpandedRectangles([index]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {[...Array(5).keys()].map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleRectangleHeight(index)}
            activeOpacity={0.75}
          >
            <View style={styles.rectangle}>
              <Text style={styles.title}>Titre {index + 1}</Text>
              <View
                style={[
                  styles.content,
                  expandedRectangles.includes(index) && { height: 500 },
                ]}
              >
                {/* Ajout de l'image */}
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={require('./test.png')}
                  />
                </View>
                {expandedRectangles.includes(index) && (
                    <Text style={styles.description}>Description {index + 1} :</Text>
                  )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  rectangle: {
    width: 360,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 25,
  },
  description: {
    fontSize: 15,
    color: 'white',
    padding: 25,
  }
});

export default InfoScreen;
