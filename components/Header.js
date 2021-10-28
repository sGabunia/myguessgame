import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import color from "../utils/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Guess a Number</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
  },
});
