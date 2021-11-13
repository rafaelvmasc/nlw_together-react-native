import React from "react";
import { View, Text, TextStyle, StyleProp } from "react-native";
import { styles } from "./styles";

type ListHeaderProps = {
  title: string;
  subtitle: string;
  style?: StyleProp<TextStyle>;
};

export function ListHeader({ title, subtitle, style }: ListHeaderProps) {
  return (
    <View style={[style,styles.container]}>
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.subtitle} >{subtitle}</Text>
    </View>
  );
}
