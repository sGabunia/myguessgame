import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    borderRadius: 7,
    alignItems: "center",
    padding: 15,
    marginVertical: 15,
  },
});
