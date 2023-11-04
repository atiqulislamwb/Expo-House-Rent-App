import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Animated,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,Platform
} from "react-native";
import { Drawer } from "react-native-drawer-layout";
import color from "../constant/color";
import Home from "./TabScreen/Home/Home";
import Favourite from "./TabScreen/Favourite/Favourite";
import Message from "./TabScreen/Message/Message";
import DrawerContent from "../components/DrawerContent";

const TabView: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("Home");

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    Animated.spring(scaleValue, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  const iconAnimationStyle = (tab: string) => {
    if (activeTab === tab) {
      return {
        transform: [{ scale: scaleValue }],
      };
    }
    return null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: color.backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={color.backgroundColor}
        barStyle="dark-content"
      />
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerPosition="right"
        drawerType="front"
        drawerStyle={{ right: 0, width: "50%" }}
        renderDrawerContent={() => {
          return <DrawerContent />;
        }}
      >
        {/* Page Content */}
        <ScrollView
          style={{ marginTop: 55, paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "Home" && <Home />}
          {activeTab === "Favourite" && <Favourite />}
          {activeTab === "Message" && <Message />}
        </ScrollView>

        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <View style={styles.wrapper}>
            <TouchableOpacity
           
              onPress={() => handleTabChange("Home")}
            >
              <Animated.Image
                source={
                  activeTab === "Home"
                    ? require("../assets/icons/home.png")
                    : require("../assets/icons/home-inactive.png")
                }
                style={[{ width: 28, height: 28 }, iconAnimationStyle("Home")]}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
          
              onPress={() => handleTabChange("Favourite")}
            >
              <Animated.Image
                source={
                  activeTab === "Favourite"
                    ? require("../assets/icons/favourite.png")
                    : require("../assets/icons/favourite-inactive.png")
                }
                style={[
                  { width: 28, height: 28 },
                  iconAnimationStyle("Favourite"),
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
     
              onPress={() => handleTabChange("Message")}
            >
              <View style={{}}>
                <Animated.Image
                  source={
                    activeTab === "Message"
                      ? require("../assets/icons/message.png")
                      : require("../assets/icons/message-inactive.png")
                  }
                  style={[
                    {
                      width: 28,
                      height: 28,
                    },
                    iconAnimationStyle("Message"),
                  ]}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
           
              onPress={() => {
                setOpen((prevOpen) => !prevOpen);
              }}
            >
              <Animated.Image
                source={
                  open === true
                    ? require("../assets/icons/setting.png")
                    : require("../assets/icons/setting-inactive.png")
                }
                style={[
                  { width: 28, height: 28 },
                  iconAnimationStyle("Setting"),
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Drawer>
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  wrapper: {
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5,
    height: Platform.OS === "ios" ? 70 : 60,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
});