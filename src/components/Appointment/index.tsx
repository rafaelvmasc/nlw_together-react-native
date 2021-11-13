import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import React from "react";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { View, Text } from "react-native";
import GuildIcon from "../GuildIcon";
import { categories } from "../../utils/categories";
import { theme } from "../../styles/theme";
import ListDivider from "../ListDivider";

export type GuildProps = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
};

export type AppointmentDataProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type AppointmentProps = RectButtonProps & {
  data: AppointmentDataProps;
};

export function Appointment({ data, ...props }: AppointmentProps) {
  const [category] = categories.filter((item) => item.id === data.category);
  

  return (
    <RectButton {...props}>
      <View style={styles.container}>
        <GuildIcon icon={data.guild.icon} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg fill="red" />
              <Text style={styles.date}> {data.date} </Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={data.guild.owner ? theme.color.primary : theme.color.on}
              />
              <Text style={styles.numberofUsers} >2</Text>
            </View>
          </View>
        

        </View>
      </View>
    </RectButton>
  );
}
