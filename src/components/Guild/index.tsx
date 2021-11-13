import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import GuildIcon from "../GuildIcon";
import {Feather} from '@expo/vector-icons'

type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  item: GuildProps;
};

export function Guild({ item, ...props }: Props) {
  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.7}>
      <GuildIcon icon={item.icon}/>

      <View style={styles.content}>
        <Text  style={styles.guildname} >{item.name}</Text>
        <Text style={styles.usertype} >{ item.owner? 'Admin' : 'Guest' }</Text>
      </View>
      <Feather name="chevron-right" size={24} />
    </TouchableOpacity>
  );
}
