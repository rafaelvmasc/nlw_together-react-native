import React, { ReactNode } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import Background from "../Background";

type Props = ModalProps & {
  children?: ReactNode;
  closeModal: () => void;
};

export default function ModalView({ children,closeModal, ...props }: Props) {
  return (
    <Modal {...props} transparent animationType="slide" statusBarTranslucent  >
      <TouchableWithoutFeedback onPress={closeModal} >
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
