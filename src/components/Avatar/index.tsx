import { Image } from "react-native";
import profileImg from "../../assets/profile.png";

import React from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../styles/theme";

type ImageProps ={
    urlImage: string;
}

export default function Avatar({urlImage} : ImageProps) {

    const { secondary50, secondary70 } = theme.color

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image style={styles.profilePic} source={{uri: urlImage}} />
    </LinearGradient>
  );
}
