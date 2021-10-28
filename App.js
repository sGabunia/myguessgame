import React, { useState } from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import StartGameScreen from "./screens/StartGameScreen";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [myNumber, setMyNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  let [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const handleGameOver = (condition) => {
    setIsGameOver(condition);
  };

  const handleGameStart = (number) => {
    setMyNumber(number);
  };

  const handleGameRestart = () => {
    setMyNumber(null);
  };

  const content = myNumber ? (
    <GameScreen
      selectedNumber={myNumber}
      handleGameOver={handleGameOver}
      handleGameRestart={handleGameRestart}
    />
  ) : (
    <StartGameScreen handleGameStart={handleGameStart} />
  );
  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isGameOver ? <GameOver handleGameOver={handleGameOver} /> : content}
    </View>
  );
}
