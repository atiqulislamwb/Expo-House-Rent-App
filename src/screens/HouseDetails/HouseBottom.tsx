import { StyleSheet, Text, View ,Image, Platform} from "react-native";
import React from "react";
import { PrimaryButton } from "../../components/Button";
import stylesFromGlobal from "../../styles/global.styles";
import color from "../../constant/color";

const HouseBottom = ({ item }:{item:any}) => {
  return (
    <View
      style={{
        paddingHorizontal: 45,
        paddingVertical: Platform.OS === "ios"? 15:10,
        backgroundColor: "#fff",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingBottom: 10,
        }}
      >
        <View>
          <Text
            style={{
              ...stylesFromGlobal.header1,
              fontSize: 18,
              letterSpacing: 0.7,
              fontWeight: "700",
            }}
          >
            ${item?.price} usd
          </Text>
        </View>
        <View>
          <PrimaryButton
            title="Reserved now!"
            backgroundColor={color.primaryColor}
            padding={8}
            borderRadius={8}
            onPress={() => {
              // Add your button press logic here
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HouseBottom;

const styles = StyleSheet.create({});
