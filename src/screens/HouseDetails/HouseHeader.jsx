import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";

const HouseHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <IconButton
        onPress={() => {
          navigation.goBack();
        }}
        iconSource={require("../../assets/icons/back.png")}
        buttonSize={42}
        iconSize={30}
        backgroundColor="#fff"
      />
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 7,
          borderRadius: 20,
          backgroundColor: "#5DC170",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#fff",
          }}
        >
          Available
        </Text>
      </View>

      <IconButton
        onPress={() => {
          // Add your button press logic here
        }}
        iconSource={require("../../assets/icons/love.png")}
        buttonSize={42}
        iconSize={22}
        backgroundColor="#fff"
      />
    </View>
  );
};

export default HouseHeader;

const styles = StyleSheet.create({});
