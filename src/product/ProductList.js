import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";

const data = [
  {
    name: "iPhone 7",
    price: 12000,
    category: "phone",
    inventory: 1000,
    safetyStock: 100,
  },
  {
    name: "iPhone 8",
    price: 10000,
    category: "phone",
    inventory: 900,
    safetyStock: 100,
  },
];

const renderItem = ({ item, index }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text>{"$" + item.price}</Text>
    <Text>/{item.category}</Text>
    <Text>/{item.inventory}</Text>
    <Text>/{item.safetyStock}</Text>
  </View>
);

export default function ProductList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#00bfff',
    flex: 1,
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#00ffff",
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 24,
  },
});
