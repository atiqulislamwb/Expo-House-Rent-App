import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { houses } from "../../../constant/data";
import stylesFromGlobal from "../../../styles/global.styles";
import { showMessage } from "react-native-flash-message";
import Location from "../../../components/Location";
import color from "../../../constant/color";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../../../components/Button";
import {House} from "../../../constant/data"


const HouseList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 10 }}>
      <View>
        {houses?.map((item, i) => (
          <View key={i} style={{ marginTop: i == 0 ? 0 : 20 }}>
            <Image
              source={{ uri: item.images[0] }}
              style={{ width: "100%", height: 270, borderRadius: 25 }}
              resizeMode=  {Platform.OS === "ios"?"cover":"contain"}
            />

            <View style={{ position: "absolute", top: 20, left: 20 }}>
              <View
                style={{
                  backgroundColor: "#F5F0EF",
                  paddingHorizontal: 15,
                  paddingVertical: 4,
                  borderRadius: 30,
                }}
              >
                <Location font="true" arrow="false" />
              </View>
            </View>

            <Pressable
              onPress={() => navigation.navigate("HouseDetails", { data: item })}
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                marginTop: -40,
                shadowColor:  "#000",
                shadowOpacity:0.2,
                elevation:1
              }}
            >
              {/* favorite button */}
              <View style={{ position: "absolute", top: -22, right: 30 }}>
                <IconButton
                  onPress={() => {
                    showMessage({
                      message: item.name,
                      description: "Saved to favorites",
                      type: "success",
                      icon: "success",
                      backgroundColor: color.primaryColor,
                    });
                  }}
                  iconSource={require("../../../assets/icons/love.png")}
                  buttonSize={42}
                  iconSize={22}
                  backgroundColor="#fff"
                />
              </View>

              <View
                style={{
                  paddingVertical: 13,
                  paddingHorizontal: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      ...stylesFromGlobal.header1,
                      fontWeight: "500",
                      fontSize: 18,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 7,
                      flexDirection: "row",
                      gap: 4,
                    }}
                  >
                    <Image
                      source={{ uri: item.profileImageURL }}
                      style={{ width: 25, height: 25, borderRadius: 25 }}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        ...stylesFromGlobal.header1,
                        fontSize: 10,
                        fontWeight: "500",
                      }}
                    >
                      {item.postedName}
                    </Text>
                  </View>
                  <View style={{ marginTop: 5, marginLeft: 3 }}>
                    <Star item={item} />
                  </View>
                </View>
                <View style={{ width: "40%", paddingLeft: 12, paddingTop: 25 }}>
                  <Text
                    style={{
                      ...stylesFromGlobal.header1,
                      fontSize: 18,
                      letterSpacing: 0.7,
                      fontWeight: "700",
                    }}
                  >
                    ${item.price} usd
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                      flexDirection: "row",
                      marginTop: 8,
                      marginLeft: -10,
                    }}
                  >
                    <View style={styles.quantityContainer}>
                      <Image
                        source={require("../../../assets/icons/bed.png")}
                        style={{ width: 13, height: 13 }}
                        resizeMode="cover"
                      />
                      <Text style={styles.quantityText}>{item.bed}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                      <Image
                        source={require("../../../assets/icons/basin.png")}
                        style={{ width: 13, height: 13 }}
                        resizeMode="cover"
                      />
                      <Text style={styles.quantityText}>{item.washroom}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                      <Image
                        source={require("../../../assets/icons/chimney.png")}
                        style={{ width: 13, height: 13 }}
                        resizeMode="cover"
                      />
                      <Text style={styles.quantityText}>{item.kitchen}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HouseList;

const styles = StyleSheet.create({
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    flexDirection: "row",
  },
  quantityText: {
    ...stylesFromGlobal.description,
    fontSize: 12,
    color: "#7A7A7A",
  },
});

const Star: React.FC<{ item: House }> = ({ item }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        flexDirection: "row",
      }}
    >
      <Image
        source={require("../../../assets/icons/star.png")}
        style={{ width: 13, height: 13 }}
        resizeMode="cover"
      />
      <Image
        source={require("../../../assets/icons/star.png")}
        style={{ width: 13, height: 13 }}
        resizeMode="cover"
      />
      <Image
        source={require("../../../assets/icons/star.png")}
        style={{ width: 13, height: 13 }}
        resizeMode="cover"
      />
      <Image
        source={require("../../../assets/icons/star1.png")}
        style={{ width: 13, height: 13 }}
        resizeMode="cover"
      />
      <Image
        source={require("../../../assets/icons/star1.png")}
        style={{ width: 13, height: 13 }}
        resizeMode="cover"
      />
      <Text
        style={{
          ...stylesFromGlobal.description,
          fontSize: 10,
        }}
      >
        {item.options} options
      </Text>
    </View>
  );
};