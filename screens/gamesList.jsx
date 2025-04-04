import React from "react";
import { View, FlatList } from "react-native";
import GameCard from "../components/gamesCards";
import GamesCarousel from "../components/gamesCarousel";
import styles from "./gamesListStyles";

const games = [
  {
    id: 1,
    title: "The Shadows of Mayfair",
    description: "Coming soon!",
    image: require("../assets/TheShadowsOfMayfair.png"),
  },
  {
    id: 2,
    title: "Escape from Tír na nÓg",
    description: "Coming soon!",
    image: require("../assets/EscapeFromTirNanOg.png"),
  },
  {
    id: 3,
    title: "Oops, Wrong Century!",
    description: "Coming soon!",
    image: require("../assets/OopsWrongCentury.png"),
  },
  {
    id: 4,
    title: "Whispers of Éire",
    description: "Coming soon!",
    image: require("../assets/WhispersOfEire.png"),
  },
];

const GamesList = () => {
  const handleStart = (game) => {
    console.log(`Starting ${game.title}`);
  };

  return (
    <View style={styles.container}>
      <GamesCarousel />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard game={item} onStart={handleStart} />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};
export default GamesList;
