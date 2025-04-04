import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./gamesCardsStyles";

const GameCard = ({ game }) => {
  const navigation = useNavigation(); // Use the useNavigation hook

  return (
    <View style={styles.card}>
      <Image source={game.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{game.title}</Text>
        <Text>{game.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (game.title === "The Shadows of Mayfair") {
              navigation.navigate("ShadowsOfMayfairHome");
            }
            if (game.title === "Escape from Tír na nÓg") {
              navigation.navigate("EscapeFromTirNanOgHome");
            }
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameCard;
