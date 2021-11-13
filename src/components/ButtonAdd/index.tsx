import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

export function ButtonAdd({ ...props }: RectButtonProps) {
  return <RectButton {...props} style={styles.container}>

    <MaterialCommunityIcons name="plus" color={theme.color.heading} size={24} />


  </RectButton>;
}
