import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  userpanel: {
    marginLeft: 22,
  },

  user: {
    flexDirection: "row",
  },
  greet: {
    color: theme.color.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
  },
  heading: {
    color: theme.color.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title700,
  },
  quote: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.color.highlight,
  },
});
