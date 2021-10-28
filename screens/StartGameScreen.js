import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import StartGame from "../components/StartGame";
import color from "../utils/colors";

const StartGameScreen = ({ handleGameStart }) => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [confirmedNumber, setConfirmedNumber] = useState(null);
  const [showSelectedNumber, setShowSelectedNumber] = useState(false);

  const createAlert = () => {
    Alert.alert(
      "Wrong type",
      "Enter numbers between 1 and 99",
      [
        {
          text: "cancel",
          onPress: handleReset,
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const handleSelectedNumberValue = (number) => {
    setSelectedNumber(number);
  };

  const handleReset = () => {
    setSelectedNumber("");
    Keyboard.dismiss();
  };

  const handleConfirm = () => {
    const number = parseInt(selectedNumber);

    if (number <= 0 || isNaN(number)) {
      createAlert();
    } else {
      setSelectedNumber("");
      setConfirmedNumber(number);
      Keyboard.dismiss();
      setShowSelectedNumber(true);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>Start a New Game</Text>
        <Card style={styles.cardContainer}>
          <Text>Select a Number</Text>
          <Input
            width="30%"
            height={40}
            autocomplete="off"
            textAlign="center"
            keyboardType="number-pad"
            maxLength={2}
            value={selectedNumber}
            onChangeText={handleSelectedNumberValue}
          />
          <View style={styles.buttonsWrapper}>
            <View style={styles.button}>
              <Button title="Reset" onPress={handleReset} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={color.primary}
                onPress={handleConfirm}
              />
            </View>
          </View>
        </Card>
        {showSelectedNumber && (
          <StartGame
            number={confirmedNumber}
            handleGameStart={handleGameStart}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    width: 95,
  },
});
