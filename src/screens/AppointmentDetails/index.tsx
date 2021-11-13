import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Member } from "../../components/Member";
import ListDivider from "../../components/ListDivider";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Raffy",
      avatar_url: "https://github.com/rafaelvmasc.png",
      status: "online",
    },
    {
      id: "2",
      username: "Raffy",
      avatar_url: "https://github.com/rafaelvmasc.png",
      status: "Ocupado",
    },
    {
      id: "3",
      username: "Raffy",
      avatar_url: "https://github.com/rafaelvmasc.png",
      status: "Indisponivel",
    },
  ];
  

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={20} color={theme.color.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannercontent}>
          <Text style={styles.title}>League of Legends</Text>
          <Text style={styles.subtitle}>
            {" "}
            É hoje que vamos chegar ao challenger sem perder uma partida da md10{" "}
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />
        <FlatList
          style={styles.list}
          data={members}
          ItemSeparatorComponent={() => <ListDivider />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member data={item} />}
        ></FlatList>

      <View style={styles.footer}>
        <ButtonIcon title="Entrar no servidor do Discord" />
      </View>
    </View>
  );
}
