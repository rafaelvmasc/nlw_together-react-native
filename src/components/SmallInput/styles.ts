import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";
export const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 48,
    paddingLeft: 16,
    borderColor: theme.color.secondary80,
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    borderRadius: 8,
    color: theme.color.highlight,
    flex: 1,
    fontSize: 13,
  },
});
