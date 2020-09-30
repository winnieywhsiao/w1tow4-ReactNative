import React, { useState } from "react";
import styles from "../styles";

import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
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
  {
    name: "iPhone X",
    price: 20000,
    category: "phone",
    inventory: 1000,
    safetyStock: 100,
  },
];

export default function ProductList() {
  const [selected, setSelected] = useState(null); //必須要放 function 裡面

  const renderItem = ({ item, index }) => {
    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

    return (
      <TouchableOpacity
        onPress={() => setSelected(index)}
        style={[styles.item, { backgroundColor }]}
      >
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.content}>{"$" + item.price}</Text>
        <Text style={styles.content}>/{index}</Text>
      </TouchableOpacity>
    );
  };

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
