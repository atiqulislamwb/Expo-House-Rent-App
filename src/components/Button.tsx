import React from "react";

import { View, Image, TouchableOpacity,Text, ImageSourcePropType,StyleSheet,  ViewStyle, ImageStyle } from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  iconSource: ImageSourcePropType;
  buttonSize: number;
  iconSize: number;
  backgroundColor: string;
  containerStyle?: ViewStyle;
  iconStyle?: ImageStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  iconSource,
  buttonSize,
  iconSize,
  backgroundColor,
  containerStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        width: buttonSize,
        height: buttonSize,
        backgroundColor,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={iconSource}
        style={{
          width: iconSize,
          height: iconSize,
          alignSelf: 'center',
          ...iconStyle,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

interface PrimaryButtonProps {
  title: string;
  backgroundColor: string;
  borderRadius: number;
  onPress: () => void;
  padding:number;

}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  backgroundColor,
  borderRadius,
  onPress,
  padding
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
        borderRadius,
        padding
      }}
      onPress={onPress}
    >
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal:30,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
});
