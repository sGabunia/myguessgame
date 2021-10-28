import React, { useState, useRef, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import SelectedNumber from "../components/SelectedNumber";

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber === exclude) {
    generateRandomNumber(exclude);
  }
  return randomNumber;
};

const GameScreen = ({ selectedNumber, handleGameRestart, handleGameOver }) => {
  const [guessNumber, setGuessNumber] = useState(
    generateRandomNumber(1, 99, selectedNumber)
  );

  const minimum = useRef(1);
  const maximum = useRef(99);

  useEffect(() => {
    if (selectedNumber === guessNumber) {
      handleGameRestart();
      handleGameOver(true);
    }
  }, [guessNumber]);

  const handleGuess = (direction) => {
    if (
      (direction === "lower" && guessNumber < selectedNumber) ||
      (direction === "greater" && guessNumber > selectedNumber)
    ) {
      Alert.alert(
        "wrong option",
        "change direction",
        [{ text: "cancel", style: "cancel" }],
        {
          cancelable: true,
        }
      );
      return;
    }

    if (direction === "greater") {
      minimum.current = guessNumber;
    } else {
      maximum.current = guessNumber;
    }

    setGuessNumber(
      generateRandomNumber(minimum.current, maximum.current, selectedNumber)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <SelectedNumber number={guessNumber}></SelectedNumber>
      <Card style={styles.card}>
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button
              title="LOWER"
              color="firebrick"
              onPress={() => handleGuess("lower")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="GREATER"
              color="green"
              onPress={() => handleGuess("greater")}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  card: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 80,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
  },
});
