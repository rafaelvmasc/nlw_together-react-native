import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../styles/theme";
import GuildIcon from "../../components/GuildIcon";
import { LinearGradient } from "expo-linear-gradient";
import { SmallInput } from "../../components/SmallInput";
import { ListHeader } from "../../components/ListHeader";
import { LargeInput } from "../../components/LargeInput";
import NormalButton from "../../components/NormalButton";
import ModalView from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Appointment";

export function AppointmentCreate() {
  const [categorySelected, setCategory] = useState("");
  const [modalvisible, setModalVisible] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  function handleModal(){
    setModalVisible(true)
  }
  function handleCloseModal(){
    setModalVisible(false)
  }

  function handleGuildSelected(guildSelect: GuildProps){
    setGuild(guildSelect);
    setModalVisible(false);
  }
  function handleCategorySelect(categoryId: string){
    setCategory(categoryId)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Header title="Agendar partida" />
        <Text style={[styles.label, { marginTop: 36, paddingHorizontal: 24 }]}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          categorySelected={categorySelected}
          setCategory={handleCategorySelect}
        />

        <View style={styles.form}>
          <RectButton  
          
          
          onPress={()=>handleModal()}  
          >
            <View style={styles.selectserver}>
              {
                guild.icon ? 
                <GuildIcon icon={guild.icon} /> :
                <LinearGradient
                style={styles.image}
                colors={[theme.color.secondary100, theme.color.secondary40]}
              />
              } 
              

              <View style={styles.selectbody}>
                <Text style={styles.label}>
                  { guild.name ? guild.name : 'Selecione um servidor' }  
                </Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.color.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.formcontainer}>
            <View>
              <Text style={styles.label}>Dia e mes</Text>
              <SmallInput placeholder="dd/mm" keyboardType="numeric" />
            </View>

            <View>
              <Text style={styles.label}>Horario</Text>
              <SmallInput placeholder="hh:mm" keyboardType="numeric" />
            </View>
          </View>
          <ListHeader
            style={{ marginTop: 40 }}
            title="Descricao"
            subtitle="Max 100 caracteres"
          />
          <LargeInput />
          <NormalButton title="Agendar" style={{ marginVertical: 30,  }} />
        </View>
      </ScrollView>
      <ModalView visible={modalvisible} closeModal={handleCloseModal} >
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
