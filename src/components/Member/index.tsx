import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../styles/theme";
import Avatar from "../Avatar";
import { styles } from "./styles";

type MemberProps = {
  data: {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
  };
};

export function Member({ data }: MemberProps) {
    const {on, primary} = theme.color;
    const isOnline = data.status ==='online';


  return (
    <View style={styles.container}>

        <Avatar urlImage={data.avatar_url} />
        
      <View style={styles.userstatus} >
        <Text style={styles.username}  >{data.username}</Text>


        <View style={styles.status} >
        <View 
        style={[styles.statusball, {
            backgroundColor: isOnline ? on : primary

        }  ]}
        
        />
        

        <Text style={styles.textstatus} >
            {isOnline? 'Disponivel' : 'Ocupado'}
        </Text>

        </View>

        

      </View>
    </View>
  );
}
