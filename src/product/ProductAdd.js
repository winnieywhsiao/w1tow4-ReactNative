import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styles from "../styles";

export default function ProductAdd(props) {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  function update() {
    props.update({ desc, price });
  }

  return (
    <View style={styles.modalText}>
      <TextInput
        placeholder="產品說明"
        value={desc}
        onChangeText={(text) => setDesc(text)}
      />

      <TextInput
        placeholder="價格"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />

      <Button title="新增" onPress={update} />
    </View>
  );
}
