import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, FlatList } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails" as never);
  }
  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate" as never);
  }

  const appointment = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "06/11 09:30",
      description:
        "É hoje que vamos chegar ao challenger sme perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "06/11 09:30",
      description:
        "É hoje que vamos chegar ao challenger sme perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        hasCheckBox
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.matches}
          data={appointment}
          ItemSeparatorComponent={() => <ListDivider />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment onPress={handleAppointmentDetails} data={item} />
          )}
        />
      </View>
    </View>
  );
}
