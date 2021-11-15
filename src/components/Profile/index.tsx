import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Avatar from "../Avatar";
import { useAuth } from "../../hooks/useAuth";

export function Profile() {

  const {user} = useAuth();
  
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View style={styles.userpanel}>
        <View style={styles.user}>
          <Text style={styles.greet}>Olá, </Text>
          <Text style={styles.heading}>{user.firstName}</Text>
        </View>
        <Text style={styles.quote}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
