import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    paddingRight: 24,
    marginLeft: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    color: theme.color.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  category: {
    color: theme.color.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    marginLeft: 8,
    color: theme.color.heading,
  },
  playersInfo:{
    flexDirection: "row",
    alignItems: "center",
  },
  numberofUsers: {
      marginLeft: 8,
      color: theme.color.heading,

  }
});
