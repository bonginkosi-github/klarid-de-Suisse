import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS } from '../../../src/components/Lindo/database/Database';
import Products from '../../../src/components/products';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  pink: '#fc084d',
};



export default window.MyCart = ({ navigation }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let products = await AsyncStorage.getItem('cartItems');
    products = JSON.parse(products);
    let productData = [];
    if (products) {
      Products.forEach(data => {
        if (products.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all products in the cart by ID 
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let price = productData[index].price;
      total = total + price;
    }
    setTotal(total);
  };

  //remove data (products) from Cart by ID

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('products will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };
  const PrimaryButton = ({ title, onPress = () => { } }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={(onPress) => (total != 0 ? navigation.navigate('PaymentViewScreen') : checkOut() /*null*/) }> 
        <View style={style.btnContainer}>
          <Text style={style.title}>{title} (R{total + total / 20} ) </Text>
        </View>
      </TouchableOpacity>
  
    );
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.key}
        onPress={() => navigation.navigate('Details', { productID: data.id })}
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignproducts: 'center',
          backgroundColor: COLOURS.backgroundLight,

        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignproducts: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}
        >
          <Image
            source={data.img}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLORS.pink,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {data.name}
            </Text>

            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignproducts: 'center',
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                R{data.price}
              </Text>

              <Text>
                (R
                {data.price + data.price / 20})
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignproducts: 'center',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignproducts: 'center',
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </View>

              <Text>1</Text>

              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: COLOURS.backgroundMedium,
                  opacity: 0.5,
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: COLOURS.backgroundDark,
                  }}
                />
              </View>
            </View>

            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLOURS.white,
          position: 'relative',
        }}
      >
        <ScrollView>
          <View>
              <MaterialCommunityIcons name="chevron-left" size={25} onPress={() => navigation.goBack()}/>
          </View>

          <Text
            style={{
              fontSize: 20,
              color: COLORS.pink,
              fontWeight: '500',
              letterSpacing: 1,
              paddingTop: 20,
              paddingLeft: 16,
              marginBottom: 10,
            }}
          >
            Product Cart
          </Text>

          <View style={{ paddingHorizontal: 16 }}>
            {product ? product.map(renderProducts) : null}
          </View>

          <View>
            <View
              style={{
                paddingHorizontal: 16,
                marginTop: 20,
                marginBottom: 80,
                backgroundColor: COLOURS.backgroundLight,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                  marginBottom: 20,
                }}
              >
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignproducts: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}
                >
                  SUBTOTAL
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: COLOURS.black,
                    opacity: 0.8,
                  }}
                >
                  R{total}.00
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignproducts: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 22,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}
                >
                  SHIPPING FEE
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: COLOURS.black,
                    opacity: 0.8,
                  }}
                >
                  FREE
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignproducts: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    maxWidth: '80%',
                    color: COLOURS.black,
                    opacity: 0.5,
                  }}
                >
                  TOTAL
                </Text>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: COLOURS.black,
                  }}
                >
                  R{total}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={style.checkOutBtn}>
          <PrimaryButton title="CHECKOUT" />
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({

  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 40,
  },
  checkOutBtn:{
    width: '80%',
    paddingLeft:75,
    paddingBottom: 10,
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
});

