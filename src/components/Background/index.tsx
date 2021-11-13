import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../styles/theme";

type BackgroundProps = {
  children?: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.color;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
