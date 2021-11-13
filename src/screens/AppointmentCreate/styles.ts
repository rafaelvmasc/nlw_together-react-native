import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {},
  label: {
    color: theme.color.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 24,
  },
  selectserver: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 68,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.color.secondary80,
    paddingRight: 24,
    overflow: "hidden",
  },
  image: {
    width: 64,
    height: 68,
    borderWidth: 1,
    borderColor: theme.color.secondary80,
    borderRadius: 8,
  },
  selectbody: {
    flex: 1,
    alignItems: "center",
  },
  formcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 20,
  },
});
