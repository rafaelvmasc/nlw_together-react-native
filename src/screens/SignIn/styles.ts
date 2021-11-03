import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.background,
  },
  image: {
    width: "100%",
    height: 360,
  },
  content:{
    marginTop: -60,
    marginBottom: 48,
    paddingHorizontal: 40,
  },
  title: {
    color: theme.color.heading,
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    color: theme.color.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 48,
  },
});
