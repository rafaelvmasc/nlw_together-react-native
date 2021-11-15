import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,

  },
  title: {
    color: theme.color.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  subtitle: {
    color: theme.color.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
});
