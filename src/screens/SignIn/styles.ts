import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -60,
    marginBottom: 48,
    paddingHorizontal: 40,
  },
  title: {
    fontFamily:theme.fonts.title700,
    color: theme.color.heading,
    fontSize: 40,
    textAlign: "center",
    marginBottom: 16,
    lineHeight:40,
  },
  description: {
    lineHeight: 25,
    fontFamily: theme.fonts.text400,
    color: theme.color.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 48,
  },
});
