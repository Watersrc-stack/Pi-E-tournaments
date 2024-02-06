import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet } from 'react-native';

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpin = () => {
    if (!spinning) {
      setSpinning(true);
      const ps5Percentage = 0.005; // 0.005% chance of winning PS5
      const laptopPercentage = 0.005; // 0.005% chance of winning laptop
      const losePercentage = 0.85; // 85% chance of losing
      const PiPercentage = 0.1499; // 14.99% chance of winning Pi
      const totalPercentage = ps5Percentage + laptopPercentage + losePercentage + PiPercentage;
      const randomRotation = Math.random() * 3600 + 360 * (Math.random() * totalPercentage); // Random rotation within the total percentage range
      Animated.timing(spinValue, {
        toValue: randomRotation,
        duration: 3500, // Adjusted duration to 5 seconds
        easing: Easing.linear, // Use linear easing for constant speed
        useNativeDriver: true,
      }).start(() => {
        setSpinning(false);
        const remainder = randomRotation % 360;
        let selectedOption;
        if (remainder < 90) {
          selectedOption = 'PS5';
        } else if (remainder < 180) {
          selectedOption = 'Laptop';
        } else if (remainder < 270) {
          selectedOption = 'Lose';
        } else {
          selectedOption = 'Pi';
        }
        setResult(selectedOption);
      });
    }
  };  
  
  const clearResult = () => {
    setResult(null);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wheel, { transform: [{ rotate: spin }] }]}>
        <View style={[styles.section, styles.redQuarter]}>
          <Text style={styles.optionText}>PS5</Text>
        </View>
        <View style={[styles.section, styles.blueQuarter]}>
          <Text style={styles.optionText}>Laptop</Text>
        </View>
        <View style={[styles.section, styles.yellowQuarter]}>
          <Text style={styles.optionText}>Lose</Text>
        </View>
        <View style={[styles.section, styles.greenQuarter]}>
          <Text style={styles.optionText}>PI</Text>
        </View>
      </Animated.View>
      <TouchableOpacity style={styles.spinButton} onPress={startSpin} disabled={spinning}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
      {result && (
        <TouchableOpacity style={styles.resultContainer} onPress={clearResult}>
          <Text style={styles.resultText}>Result: {result}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const circleSize = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    position: 'relative',
  },
  section: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  spinButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  redQuarter: {
    backgroundColor: 'red',
    top: 0,
    left: 0,
  },
  blueQuarter: {
    backgroundColor: 'blue',
    top: 0,
    right: 0,
  },
  yellowQuarter: {
    backgroundColor: 'yellow',
    bottom: 0,
    left: 0,
  },
  greenQuarter: {
    backgroundColor: 'green',
    bottom: 0,
    right: 0,
  },
});

export default SpinWheel;
