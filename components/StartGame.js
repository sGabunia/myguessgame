import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import SelectedNumber from "./SelectedNumber";

const StartGame = ({ number, handleGameStart }) => {
  return (
    <Card style={styles.card}>
      <Text>You selected</Text>
      <SelectedNumber number={number} />
      <Button title="START GAME" onPress={() => handleGameStart(number)} />
    </Card>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  card: {
    width: "50%",
    padding: 20,
  },
});
