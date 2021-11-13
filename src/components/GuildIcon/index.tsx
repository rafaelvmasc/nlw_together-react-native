import { styles } from "./styles";

import React from "react";
import { Image } from "react-native";

type Props = {
  icon: string | null
}

export default function GuildIcon({icon}:Props) {


  return <Image source={{uri: icon ? icon : ''}} resizeMode='cover' style={styles.image}/>
}
