import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StoreItem from "./components/StoreItem";
import Loader from "./components/Loader";
import Header from "./components/Header";

export default function App() {
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=${currentPage}&itemsPerPage=10&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100`
    )
      .then((response) => response.json())
      .then((data) => {
        setStoreData([...storeData, ...data.object]);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <FlatList
        data={storeData}
        renderItem={({ item }) => <StoreItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListFooterComponent={() => isLoading && <Loader />}
        onEndReached={() => setCurrentPage(currentPage + 1)}
        onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
