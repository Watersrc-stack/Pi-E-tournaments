import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const InfoScreen = () => {
  const [expandedRectangles, setExpandedRectangles] = useState([]);

  const toggleRectangleHeight = index => {
    if (expandedRectangles.includes(index)) {
      setExpandedRectangles(expandedRectangles.filter(item => item !== index));
    } else {
      setExpandedRectangles([...expandedRectangles, index]);
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
            <View
              style={[
                styles.rectangle,
                expandedRectangles.includes(index) && { height: 500 },
              ]}
            ></View>
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
    height: 200,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 25,
  },
});

export default InfoScreen;
