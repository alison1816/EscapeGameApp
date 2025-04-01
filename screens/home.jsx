// screens/Home.js
import React, {useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import styles from './homeStyles'; // Import the styles from homeStyles.js

const Home = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

useEffect(() => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.05, // Scale up slightly
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, // Return to normal size
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/Celtic-Enigma-Logo.png')} 
        style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert("Button Pressed!")}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <Text style={styles.version}>V1.0.0</Text>
    </View>
  );
};

export default Home;
