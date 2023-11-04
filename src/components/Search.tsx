import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ViewStyle } from 'react-native';
import stylesFromGlobal from '../styles/global.styles';

interface SearchProps {
  // Define any props you might need here
}

const Search: React.FC<SearchProps> = () => {
  const [search, setSearch] = useState<string>(''); // Initialize the state with the appropriate type
  console.log(search);
  
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 4,
      }}
    >
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View>
          <TouchableOpacity style={{ marginTop: 5 }}>
            <Image
              source={require('../assets/icons/search.png')}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '80%' }}>
          <TextInput
            style={stylesFromGlobal.textInputOne}
            placeholder="What are you looking for?"
            placeholderTextColor="#8EA6BF"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={{ marginTop: 5 }}>
            <Image
              source={require('../assets/icons/filter.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Define any additional styles here
});

export default Search;