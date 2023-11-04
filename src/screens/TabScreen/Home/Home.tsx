import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "./HomeHeader";
import stylesFromGlobal from "../../../styles/global.styles";
import color from "../../../constant/color";
import Search from "../../../components/Search";
import HomeTabButton from "./HomeTabButton";
import HouseList from "./HouseList";
import HouseGrid from "./HouseGrid";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("List");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ paddingHorizontal: 22, paddingBottom: 150 }}>
      {/* Home Header */}
      <HomeHeader />

      {/* Profile Related */}
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            ...stylesFromGlobal.header1,
            color: color.subHeadingColor,
            fontSize: 17,
            fontWeight: "400",
          }}
        >
          Hello Eddie!
        </Text>
        <Text
          style={{
            ...stylesFromGlobal.header1,
            fontSize: 18,
            fontWeight: "500",
            marginTop: 2,
          }}
        >
          Start looking for your house
        </Text>
      </View>

      {/* Search Bar */}
      <Search />

      {/* Home Tab Button and content */}
      <View style={{ marginTop: 0 }}>
        <HomeTabButton activeTab={activeTab} handleTabChange={handleTabChange} />
        <View style={{ marginTop: 10 }}>
          {activeTab === "List" && <HouseList />}
          {activeTab === "Grid" && <HouseGrid />}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});