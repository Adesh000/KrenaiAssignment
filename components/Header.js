import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
