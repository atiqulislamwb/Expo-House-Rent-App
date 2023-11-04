import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
} from "react-native";
import color from "../../../constant/color";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface TabButtonProps {
  activeTab: string;
  tabName: string;
  handleTabChange: (tab: string) => void;
  iconActive: number;
  iconInactive: number;
  primaryColor: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  activeTab,
  tabName,
  handleTabChange,
  iconActive,
  iconInactive,
  primaryColor,
}) => {
  const isTabActive = activeTab === tabName;

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Add animation
    handleTabChange(tabName);
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.iconContainer,
        backgroundColor: isTabActive ? primaryColor : "#fff",
        height: 70,
        rowGap: 5,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3,
      }}
      onPress={handlePress}
    >
      <Image
        source={isTabActive ? iconActive : iconInactive}
        style={{
          width: 35,
          height: 35,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

interface HomeTabButtonProps {
  handleTabChange: (tab: string) => void;
  activeTab: string;
}

const HomeTabButton: React.FC<HomeTabButtonProps> = ({ handleTabChange, activeTab }) => {
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

export default HomeTabButton;