import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import IonIcons from "react-native-vector-icons/Ionicons"; // Import Ionicons for the back button
import styles from "./escapeFromTirNanOgHomeStyles"; // Import your styles

const EscapeFromTirNanOgHome = () => {
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
          source={require("../../../assets/EscapeFromTirNanOg-Landscape.png")} // Replace with the correct image path
          style={styles.image}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Escape from Tir na nOg</Text>
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
              console.log("Start Escape from Tir na nOg game");
              // Add your game starting logic here
            }}
          >
            <Text style={styles.hintButtonText}>Hints</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              console.log("Start Escape from Tir na nOg game");
              // Add your game starting logic here
            }}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EscapeFromTirNanOgHome;
