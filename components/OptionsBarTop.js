import React from "react";
import { Button, View, StyleSheet } from "react-native";

function OptionsBarTop() {
  return (
    <View style={styles.optionsBar}>
      <View style={styles.addButton}>
        <Button onPress={console.log("TEST")} title="Add" color="red" />
      </View>
      <View style={styles.editButton}>
        <Button onPress={console.log("TEST")} title="Edit" color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsBar: {
    flexDirection: "row",
  },
  addButton: {
    flex: 1,
  },
  editButton: {
    flex: 1,
  },
});

export default OptionsBarTop;
