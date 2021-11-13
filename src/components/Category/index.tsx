import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../styles/theme";

type CategoryProps = RectButtonProps & {
  icon: React.FC<SvgProps>;
  title: string;
  checked?: boolean;
  hasCheckBox: boolean;
};

export function Category({
  icon: Icon,
  title,
  checked = false,
  hasCheckBox,
  ...props
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.color;

  return (
    <RectButton style={styles.container} {...props}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >

        
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>

          {
            hasCheckBox &&
            <View style={checked ? styles.checked : styles.nonchecked} />
          }


          <Icon width={48} height={48} />

          <Text style={styles.textItem}>{title}</Text>
        </View>

      </LinearGradient>
    </RectButton>
  );
}
