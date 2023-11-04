/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import color from "../constant/color";

const stylesFromGlobal = StyleSheet.create({
  header1: {
    fontSize: 20,
    color: color.headingColor,
    fontWeight: "800",
  },
  description: {
    fontSize: 12,
    color: color.subHeadingColor,
  },
  round: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ED6063",
  },
  textInputOne: {
    width: "100%",
    fontSize: 13,

    borderColor: "transparent",
    paddingLeft: 10,
    height: 40,
  },
});
export default stylesFromGlobal;
