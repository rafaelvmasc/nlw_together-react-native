import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({ categorySelected, setCategory, hasCheckBox=false }: Props) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
    >
      {categories.map((category) => (
        <Category
          hasCheckBox={hasCheckBox}
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={()=> setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
