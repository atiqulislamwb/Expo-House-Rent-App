import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import color from '../constant/color';

const DrawerContent: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.backgroundColor }}>
      <Text>DrawerContent</Text>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});