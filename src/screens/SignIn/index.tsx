import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, Alert, ActivityIndicator } from "react-native";

import illustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../styles/theme";
import { styles } from "./styles";

export function SignIn() {

  const {loading, signIn} = useAuth()

  async function handleSignIn() {
    try{
      await signIn();
    }catch(error){
      Alert.alert('Error:', 'errou');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}e organize suas{`\n`}
          jogatinas
        </Text>
        <Text style={styles.description}>
          Crie grupos para jogar seus games{`\n`} favoritos com seus amigos
        </Text>

       { 
       loading? 
       <ActivityIndicator color={theme.color.primary} />
       :
       <ButtonIcon
          title="Entrar com Discord"
          onPress={handleSignIn}
        />
        
      }
      </View>
    </View>
  );
}
