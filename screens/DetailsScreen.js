import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, ToastAndroid } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Products from '../components/products';

const COLORS = {
    white: '#fff',
    dark: '#000',
    red: '#F52A2A',
    light: '#F1F1F1',
    pink: '#fc084d',
};


const DetailsScreen = ({ navigation, route }) => {
    const {id} = route.params;
 
  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by id
  const getDataFromDB = async () => {
    for (let index = 0; index < Products.length; index++) {
      if (Products[index].id == id) {
        await setProduct(Products[index]);
        return;
      }
    }
  };

  //add to cart
  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };
    const PrimaryButton = ({ title, onPress = () => { addToCart(product.id)} }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={style.btnContainer}>
                    <Text style={style.title}>{title}</Text>
                </View>
            </TouchableOpacity>
    
        );
    
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            <View style={style.header}>
                <Icon name="arrow-back" size={25} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={25} onPress={() => navigation.navigate('Cart')}/>
            </View>
            <View style={style.imageContainer}>
                <Image source={product.img} style={{ resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={style.detailsContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{product.name}</Text>
                    <View style={style.priceTag}>
                        <Text
                            style={{
                                marginLeft: 15,
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: 16,
                            }}>
                            R{product.price}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 16,
                            lineHeight: 22,
                            marginTop: 10,
                        }}>
                        {product.about}
                    </Text>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        

                        <View style={style.buyBtn}>
                            <PrimaryButton title="ADD TO CART" />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({ 
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    buyBtn:{
        width: '50%',
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    title: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
    btnContainer: {
        backgroundColor: COLORS.pink,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceTag: {
        backgroundColor: COLORS.pink,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
});

export default DetailsScreen;