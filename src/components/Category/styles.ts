import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: theme.color.secondary40,
    borderRadius: 8,
    width: 100,
    height: 116,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 0,
    backgroundColor: theme.color.primary,
    width: 8,
    height: 8,
    marginRight: 7,
  },
  nonchecked: {
    position: "absolute",
    top: 7,
    right: 0,
    marginRight: 7,
    backgroundColor: theme.color.secondary100,
    width: 12,
    height: 12,

    borderColor: theme.color.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  textItem: {
    color: theme.color.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
  },
});
