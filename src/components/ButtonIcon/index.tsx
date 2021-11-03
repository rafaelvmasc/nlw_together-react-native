import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import discordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.iconWrapper} {...rest}>
      <View style={styles.imgContainer}>
        <Image source={discordImg} style={styles.imgDiscord} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
