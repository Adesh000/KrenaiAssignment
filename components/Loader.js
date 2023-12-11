import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#f7287b" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
