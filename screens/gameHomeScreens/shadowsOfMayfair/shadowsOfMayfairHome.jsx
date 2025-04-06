import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import IonIcons from "react-native-vector-icons/Ionicons"; // Import Ionicons for the back button
import styles from "./shadowsOfMayfairHomeStyles";

const ShadowsOfMayfairHome = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <IonIcons name="arrow-back" size={24} color="#283314" />
      </TouchableOpacity>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/TheShadowsOfMayfair-Landscape.png")} // Replace with the correct image path
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>The Shadows of Mayfair</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.tagline}>
          Uncover the secrets of Mayfair, where every shadow hides a clue.
        </Text>
        <Text style={styles.description}>
          A thrilling 1820's detective escape game set in the foggy streets of
          London. Players uncover hidden clues and solve cryptic puzzles using
          physical props, unlocking codes to reveal vital secrets and crack the
          case before time runs out.
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={() => {
              alert("Hints coming soon!");
            }}
          >
            <Text style={styles.hintButtonText}>Hints</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              alert("Coming soon!");
            }}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.comingSoonText}>Coming soon!</Text>
      </View>
    </ScrollView>
  );
};

export default ShadowsOfMayfairHome;
