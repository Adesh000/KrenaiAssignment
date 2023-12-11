// import { Image, StyleSheet, Text, View } from "react-native";
// import React from "react";

// const StoreItem = ({ item }) => {
//   return (
//     <View style={styles.itemContainer}>
//       <Image style={styles.image} source={{ uri: item.mediaUrl }} />
//       <Text>{item.name}</Text>
//       <Text>{item.category[0].name}</Text>
//       <Text>{item.variants[0].variant}</Text>
//       <Text>${item.variants[0].mrp}</Text>
//     </View>
//   );
// };

// export default StoreItem;

// const styles = StyleSheet.create({
//   image: {
//     width: 150,
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   itemContainer: {
//     width: "50%",
//     marginLeft: 10,
//     marginTop: 20,
//     alignContent: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.39,
//     shadowRadius: 8.3,
//   },
// });

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StoreItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.mediaUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category[0].name}</Text>
        <Text style={styles.variant}>{item.variants[0].variant}</Text>
        <Text style={styles.price}>$ {item.variants[0].mrp}</Text>
      </View>
    </View>
  );
};

export default StoreItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  itemContainer: {
    width: "44%",
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8.3,
  },
  textContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    color: "#888",
  },
  variant: {
    marginTop: 5,
    color: "#555",
  },
  price: {
    marginTop: 5,
    color: "#e44d26",
    fontWeight: "bold",
  },
});
