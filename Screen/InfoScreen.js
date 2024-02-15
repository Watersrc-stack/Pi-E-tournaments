import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const InfoScreen = () => {
  const [expandedRectangles, setExpandedRectangles] = useState([]);
  const [lineCounts, setLineCounts] = useState([]);

  useEffect(() => {
    const counts = new Array(5).fill(0);
    setLineCounts(counts);
  }, []);

  const toggleRectangleHeight = index => {
    if (expandedRectangles.includes(index)) {
      setExpandedRectangles(expandedRectangles.filter(item => item !== index));
    } else {
      setExpandedRectangles([index]);
    }
  };

  const onTextLayout = (event, index) => {
    const { lines } = event.nativeEvent;
    setLineCounts(prevState => {
      const newState = [...prevState];
      newState[index] = lines.length;
      return newState;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {[...Array(5).keys()].map((index) => (
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
                  expandedRectangles.includes(index) && { height: 200 + (lineCounts[index] * 15) },
                ]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={require('./test.png')}
                  />
                </View>
                {expandedRectangles.includes(index) && (
                  <>
                    <Text
                      style={styles.description}
                      onTextLayout={(event) => onTextLayout(event, index)}
                    >
                      Description {index + 1} :
                    </Text>
                    <Text style={styles.additionalText} onTextLayout={(event) => onTextLayout(event, index)}>
                      Additional Text Here: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla nec diam fermentum cursus. Phasellus pretium risus vitae odio consequat, eget dictum velit gravida. Nulla facilisi. Vivamus malesuada sagittis elit nec hendrerit.Additional Text Here: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla nec diam fermentum cursus. Phasellus pretium risus vitae odio consequat, eget dictum velit gravida. Nulla facilisi. Vivamus malesuada sagittis elit nec hendrerit.
                      {'\n'}
                    </Text>
                  </>
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
  },
  additionalText: {
    fontSize: 12,
    color: 'white',
    padding: 10,
  }
});

export default InfoScreen;
