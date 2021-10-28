import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOver = ({ handleGameOver }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Button title="restart game" onPress={() => handleGameOver(false)} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
});
