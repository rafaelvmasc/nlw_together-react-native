import React, { ReactNode } from "react";
import { View, Modal, ModalProps } from "react-native";
import { styles } from "./styles";
import Background from "../Background";

type Props = ModalProps & {
  children?: ReactNode;
};

export default function ModalView({ children, ...props }: Props) {
  return (
    <Modal {...props} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
