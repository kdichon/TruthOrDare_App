import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {products} from '../data';
import CardProduct from './components/CardProduct';
import {stylesProduct} from './stylesProduct';

const ProductData = () => {
  console.log('product', products);
  return (
    <View style={stylesProduct.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <CardProduct product={item} />}
        keyExtractor={item => item.id}
        numColumns={'2'}
      />
    </View>
  );
};

export default ProductData;
