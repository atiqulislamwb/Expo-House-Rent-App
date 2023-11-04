import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { RouteProp } from '@react-navigation/native';

import color from '../../constant/color';
import HouseHeader from './HouseHeader';
import HouseBottom from './HouseBottom';
import HouseContent from './HouseContent';

type HouseDetailsRouteProp = {
  route: {
    params: {
      data: {
        images: string[];
        // Add more types for data properties as needed
      };
    };
  };
};

const { width: screenWidth } = Dimensions.get('window');

const HouseDetails: React.FC<HouseDetailsRouteProp> = ({ route }) => {
  const { data } = route.params;

  const translateY = useSharedValue(200); // Initial translateY value

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: color.backgroundColor }}>
      <View style={{ width: '100%', height: 420 }}>
        {/* Swiper Header Button */}
        <View
          style={{ position: 'absolute', top: 60, left: 0, right: 0, zIndex: 2 }}>
          <HouseHeader />
        </View>

        <Swiper
          autoplay={true}
          autoplayTimeout={4}
          showsPagination={true}
          loop={true}
          dotColor="#fff"
          activeDotColor={color.primaryColor}
          paginationStyle={{
            position: 'absolute',
            bottom: 130,
          }}>
          {data?.images?.map((item:any, i:any) => (
            <View key={i}>
              <Image
                source={{ uri: item }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          ))}
        </Swiper>
      </View>

      {/* House Details content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: -50,
          backgroundColor: color.backgroundColor,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <Animated.View style={animatedStyle}>
          <HouseContent item={data} />
        </Animated.View>
      </ScrollView>
      {/* House Details bottom button */}
      <View
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
        <HouseBottom item={data} />
      </View>
    </View>
  );
};

export default HouseDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});



