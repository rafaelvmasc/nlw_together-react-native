import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: theme.color.primary,
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  imgContainer: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderEndColor: theme.color.line,
  },

  imgDiscord: {},
  text: {
    fontFamily: theme.fonts.text500,
    flex: 1,
    color: theme.color.heading,
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
