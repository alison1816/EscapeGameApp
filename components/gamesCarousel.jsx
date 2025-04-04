import React from "react";
import { View, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./gamesCarouselStyles.js";

const { width } = Dimensions.get("window");

const gamesData = [
  {
    id: 1,
    image: require("../assets/TheShadowsOfMayfair-Landscape.png"),
  },
  {
    id: 2,
    image: require("../assets/EscapeFromTirNanOg-Landscape.png"),
  },
  {
    id: 3,
    image: require("../assets/OopsWrongCentury-Landscape.png"),
  },
  {
    id: 4,
    image: require("../assets/WhispersOfEire-Landscape.png"),
  },
];

const GamesCarousel = () => {
  return (
    <Carousel
      loop
      width={width}
      height={270}
      autoPlay
      data={gamesData}
      scrollAnimationDuration={2000}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        </View>
      )}
      style={{ alignSelf: "center" }}
    />
  );
};

export default GamesCarousel;
