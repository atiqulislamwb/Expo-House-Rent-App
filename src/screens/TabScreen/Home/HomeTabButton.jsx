import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import React, { useState, useEffect } from "react";
import color from "../../../constant/color";

const HomeTabButton = ({ handleTabChange, activeTab }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        columnGap: 20,
        marginTop: -7,
      }}
    >
      <TabButton
        activeTab={activeTab}
        tabName="List"
        handleTabChange={handleTabChange}
        iconActive={require("../../../assets/icons/list-active.png")}
        iconInactive={require("../../../assets/icons/list.png")}
        primaryColor={color.primaryColor}
      />
      <TabButton
        activeTab={activeTab}
        tabName="Grid"
        handleTabChange={handleTabChange}
        iconActive={require("../../../assets/icons/grid-active.png")}
        iconInactive={require("../../../assets/icons/grid.png")}
        primaryColor={color.primaryColor}
      />

      {/* extra */}
      <TabButton
        activeTab={activeTab}
        tabName="List2"
        handleTabChange={handleTabChange}
        iconActive={require("../../../assets/icons/file1.png")}
        iconInactive={require("../../../assets/icons/file.png")}
        primaryColor={color.primaryColor}
      />
      <TabButton
        activeTab={activeTab}
        tabName="Grid22"
        handleTabChange={handleTabChange}
        iconActive={require("../../../assets/icons/draw1.png")}
        iconInactive={require("../../../assets/icons/draw.png")}
        primaryColor={color.primaryColor}
      />
    </View>
  );
};

export default HomeTabButton;

const styles = StyleSheet.create({
  iconContainer: {
    width: 70,
    height: 70,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

const TabButton = ({
  activeTab,
  tabName,
  handleTabChange,
  iconActive,
  iconInactive,
  primaryColor,
}) => {
  const isTabActive = activeTab === tabName;
  const [paddingVertical, setPaddingVertical] = useState(isTabActive ? 25 : 0);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPaddingVertical(isTabActive ? 25 : 0);
  }, [isTabActive]);

  useEffect(() => {
    if (
      Platform.OS === "android" &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <TouchableOpacity
      style={{
        ...styles.iconContainer,
        backgroundColor: isTabActive ? primaryColor : "#fff",
        height: 70 + paddingVertical, // Fixed height for the button
        rowGap: 5,
        marginTop: isTabActive ? 25 : 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }}
      onPress={() => handleTabChange(tabName)}
    >
      <Image
        source={isTabActive ? iconActive : iconInactive}
        style={{
          width: 35,
          height: 35,
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
        }}
        resizeMode="contain"
      />

      {isTabActive && (
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          {tabName}
        </Text>
      )}
    </TouchableOpacity>
  );
};
