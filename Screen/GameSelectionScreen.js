// GameSelectorScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameSelectorScreen = () => {
  const navigation = useNavigation();

  const navigateToSpinGame = () => {
    navigation.navigate('Spin');
  };

  const navigateToTournament = () => {
    navigation.navigate('Tournament');
  };

  const navigateToInfo = () => {
    navigation.navigate('Info');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToSpinGame}>
        <Text>Spin Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToTournament}>
        <Text>Tournament</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToInfo}>
        <Text>Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
  },
});

export default GameSelectorScreen;
