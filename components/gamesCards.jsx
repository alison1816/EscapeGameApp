import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./gamesCardsStyles";

const GameCard = ({ game, onStart }) => (
  <View style={styles.card}>
    <Image source={game.image} style={styles.image} />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{game.title}</Text>
      <Text>{game.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onStart(game)}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default GameCard;
