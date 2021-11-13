import React from "react";
import {
  Text,
  Image,
  View,
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import discordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.iconWrapper} {...rest}>
      <View style={styles.imgContainer}>
        <Image source={discordImg} style={styles.imgDiscord} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
}
