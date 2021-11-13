import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Avatar from "../Avatar";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage={"https://github.com/rafaelvmasc.png"} />
      <View style={styles.userpanel}>
        <View style={styles.user}>
          <Text style={styles.greet}>Olá, </Text>
          <Text style={styles.heading}>Rafael</Text>
        </View>
        <Text style={styles.quote}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
