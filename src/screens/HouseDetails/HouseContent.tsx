import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import color from '../../constant/color';
import Location from '../../components/Location';
import stylesFromGlobal from '../../styles/global.styles';

type TabName = 'Information' | 'Comments' | 'Offers' | 'Share';

type HouseContentProps = {
  item: {
    name: string;
    facilities: string[];
    bed: string;
    washroom: string;
    kitchen: string;
    description: string;
  };
};

const HouseContent: React.FC<HouseContentProps> = ({ item }) => {
  const [activeTab, setActiveTab] = useState<TabName>('Information');

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <View style={{ padding: 20 }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Location font="true" arrow="false" />
        </View>
        <View>
          <Text
            style={{
              ...stylesFromGlobal.header1,
              fontSize: 21,
              fontWeight:"700",
              marginTop: 4,
              letterSpacing:0.4
            }}>
            {item?.name}
          </Text>
          <View
            style={{
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            {item?.facilities?.map((option, i) => (
              <View
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 7,
                }}>
                {i > 0 && (
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 5,
                      backgroundColor: color.primaryColor,
                    }}></View>
                )}
                <Text
                  style={{
                    ...stylesFromGlobal.description,
                    color: color.subHeadingColor,
                  }}>
                  {option}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              flexDirection: 'row',
              marginTop: 14,
            }}>
            <View
              style={{
                ...styles.quantityContainer,
              }}>
              <Image
                source={require('../../assets/icons/bed1.png')}
                style={{ width: 20, height: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  ...styles.quantityText,
                }}>
                {item?.bed}
              </Text>
            </View>
            <View
              style={{
                ...styles.quantityContainer,
              }}>
              <Image
                source={require('../../assets/icons/basin1.png')}
                style={{ width: 20, height: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  ...styles.quantityText,
                }}>
                {item?.washroom}
              </Text>
            </View>
            <View
              style={{
                ...styles.quantityContainer,
              }}>
              <Image
                source={require('../../assets/icons/chimney1.png')}
                style={{ width: 20, height: 20 }}
                resizeMode="cover"
              />
              <Text
                style={{
                  ...styles.quantityText,
                }}>
                {item?.kitchen}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* divider */}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: color.inactiveIconColor,
        }}></View>

      {/* Tab BUTTON */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 6,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TabButton
          activeTab={activeTab}
          tabName="Information"
          iconActive={require('../../assets/icons/info-active.png')}
          iconInactive={require('../../assets/icons/info.png')}
          text="Information"
          onPress={handleTabChange}
        />
        <TabButton
          activeTab={activeTab}
          tabName="Comments"
          iconActive={require('../../assets/icons/comment.png')}
          iconInactive={require('../../assets/icons/comment-active.png')}
          text="Comments"
          onPress={handleTabChange}
        />
        <TabButton
          activeTab={activeTab}
          tabName="Offers"
          iconActive={require('../../assets/icons/offer-active.png')}
          iconInactive={require('../../assets/icons/offer.png')}
          text="Offers"
          onPress={handleTabChange}
        />
        <TabButton
          activeTab={activeTab}
          tabName="Share"
          iconActive={require('../../assets/icons/share-active.png')}
          iconInactive={require('../../assets/icons/share.png')}
          text="Shared"
          onPress={handleTabChange}
        />
      </View>

      {/* divider */}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: color.inactiveIconColor,
        }}></View>

      {/* Tab content */}
      {activeTab === 'Information' && (
        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          <Text
            style={{
              ...stylesFromGlobal.header1,
              fontWeight: '700',
              fontSize: 16,
              marginTop: 4,
            }}>
            Description
          </Text>
          <Text
            style={{
              ...stylesFromGlobal.description,
              fontWeight: '500',
              fontSize: 11,
              marginTop: 13,
              paddingBottom:100
            }}>
            {item?.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HouseContent;

const styles = StyleSheet.create({
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  quantityText: {
    ...stylesFromGlobal.description,
    fontSize: 15,
    color: '#7A7A7A',
    marginTop: 4,
    fontWeight:"600",
  },
  buttonContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 11,
  },
});

type TabButtonProps = {
  activeTab: TabName;
  tabName: TabName;
  iconActive: any;
  iconInactive: any;
  text: string;
  onPress: (tab: TabName) => void;
};

const TabButton: React.FC<TabButtonProps> = ({
  activeTab,
  tabName,
  iconActive,
  iconInactive,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => onPress(tabName)}>
      <Image
        source={activeTab === tabName ? iconActive : iconInactive}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text
        style={{
          ...styles.text,
          color:
            activeTab === tabName
              ? color.primaryColor
              : color.subHeadingColor,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};