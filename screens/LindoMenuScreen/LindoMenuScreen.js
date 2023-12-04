import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import Products from '../../../src/components/products';
const width = Dimensions.get('window').width / 2 - 30;

const COLORS = {
    white: '#fff',
    dark: '#000',
    red: '#F52A2A',
    light: '#F1F1F1',
    pink: '#fc084d',
};


export default window.Profile = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['LATEST', 'ALL','MILK PRODUCTS', 'CREAMS'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            horizontal
            showsHorizontalScrollIndicator={false}
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({product}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        
        onPress={() => navigation.navigate('Details', product)}
        >
        <View style={style.card}>
          
          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={product.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {product.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              R{product.price}
            </Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold', color:'#a28a29'}}>KLARIS</Text>
          <Text style={{fontSize: 20, color: COLORS.pink}}>DE SUISSE cosmetic app</Text>
        </View>
        <Icon name="search" size={25} style={{paddingLeft: 60}} onPress={() => navigation.navigate('Search')}/>
        <Icon name="shopping-cart" size={25} onPress={() => navigation.navigate('Cart')}/>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={Products}
        renderItem={({item}) => {
          return <Card product={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.pink,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.pink,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


