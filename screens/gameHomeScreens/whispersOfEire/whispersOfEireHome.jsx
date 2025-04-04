import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import IonIcons from "react-native-vector-icons/Ionicons"; // Import Ionicons for the back button
import styles from "./whispersOfEireHomeStyles";

const WhispersOfEireHome = () => {
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
          source={require("../../../assets/WhispersOfEire-Landscape.png")} // Replace with the correct image path
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Whispers of Éire</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.description}>This is the tag line!</Text>
        <Text style={styles.description}>
          This is a description of the game. It explains how to app is used
          along with the physical props.
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

export default WhispersOfEireHome;
