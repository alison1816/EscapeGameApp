import React from "react";
import { View, FlatList } from "react-native";
import GameCard from "../components/gamesCards";
import styles from "./gamesListStyles";

const games = [
  {
    id: 1,
    title: "Game 1",
    description: "Description for Game 1",
    image: require("../assets/favicon.png"),
  },
  {
    id: 2,
    title: "Game 2",
    description: "Description for Game 2",
    image: require("../assets/favicon.png"),
  },
  {
    id: 3,
    title: "Game 3",
    description: "Description for Game 3",
    image: require("../assets/favicon.png"),
  },
];

const GamesList = () => {
  const handleStart = (game) => {
    console.log(`Starting ${game.title}`);
  };

  return (
    <View style={styles.container}>
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
