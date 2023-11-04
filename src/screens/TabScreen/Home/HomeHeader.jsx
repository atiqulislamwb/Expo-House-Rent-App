import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Location from '../../../components/Location';
import stylesFromGlobal from '../../../styles/global.styles';

const HomeHeader = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 6,
      }}>
      <View style={{width: '15%'}}>
        <Image
          source={require('../../../assets/images/profile.png')}
          style={{width: 40, height: 40, borderRadius: 50}}
          resizeMode="cover"
        />
      </View>
      <View style={{width: '70%'}}>
        <Location arrow="true" />
      </View>
      <View style={{width: '15%'}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            columnGap: 15,
          }}>
          <TouchableOpacity style={{}}>
            <Image
              source={require('../../../assets/icons/notification.png')}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
            <View style={{position: 'absolute', top: 0, right: 1}}>
              <View style={{...stylesFromGlobal.round}}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Image
              source={require('../../../assets/icons/setting1.png')}
              style={{width: 25, height: 25}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
