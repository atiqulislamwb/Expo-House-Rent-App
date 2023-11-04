import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import stylesFromGlobal from "../styles/global.styles";
import color from "../constant/color";

const Location = ({ arrow, font }:{arrow:string, font:string}) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        columnGap: 3,
      }}
    >
      <TouchableOpacity style={{ marginLeft: -3 }}>
        <Image
          source={require("../assets/icons/location.png")}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          ...stylesFromGlobal.description,
          color: color.headingColor,
          fontWeight: font == "true" ? "500" : "600",
          fontSize: font == "true" ? 11 : 12,
        }}
      >
        Los Angeles, CA
      </Text>
      {arrow == "true" && (
        <TouchableOpacity style={{}}>
          <Image
            source={require("../assets/icons/down-arrow.png")}
            style={{ width: 15, height: 15, marginLeft:2 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
