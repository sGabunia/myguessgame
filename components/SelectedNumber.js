import React from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../utils/colors";

const SelectedNumber = ({ number }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default SelectedNumber;

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 10,
    padding: 12,
    marginVertical: 15,
  },
  number: {
    fontSize: 18,
  },
});
