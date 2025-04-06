// screens/ProfileScreen.js
import React from "react";
import { View, Text } from "react-native";
import styles from "./settingStyles"; // Import the styles

export default function Settings() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.container}>
        <Text>Settings coming soon!</Text>
      </View>
    </View>
  );
}
