import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {data} from '../../src/common/DataStore/data';
import CardProduct from './components/CardProduct';
import {Button} from 'react-native-paper';
import {stylesProduct} from './stylesProduct';
import {asc, desc, init} from '../redux/product';
// import firestore from '@react-native-firebase/firestore';

const ProductStore = () => {
  const products = useSelector(state => state.product);

  const dispatch = useDispatch();

  // Classement Ascendant
  const ascProduct = () => {
    console.log('ascProduct');
    // Permet d'utiliser les fonctions du store
    dispatch(asc());
  };

  // Remise à zéro
  const initProduct = () => {
    console.log('initProduct');
    // Permet d'utiliser les fonctions du store
    dispatch(init());
  };

  // Classement Ascendant
  const descProduct = () => {
    console.log('descProduct');
    // Permet d'utiliser les fonctions du store
    dispatch(desc());
  };

  useEffect(() => {
    console.log('product_load');
    /*  
    Ajout de data vers une collection de Firestore

    products.map(async itemProducts => {
        firestore().collection('product').add(itemProducts);
      console.log('itemProduct', itemProducts.id);
    }); */
  }, []);

  //   console.log('product', products);
  return (
    <View>
      <Text>Product Store</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button style={stylesProduct.contentButtonFilter} onPress={ascProduct}>
          asc
        </Button>
        <Button style={stylesProduct.contentButtonFilter} onPress={initProduct}>
          init
        </Button>
        <Button style={stylesProduct.contentButtonFilter} onPress={descProduct}>
          desc
        </Button>
      </View>

      <FlatList
        data={products}
        renderItem={({item}) => <CardProduct product={item} />}
        keyExtractor={item => item.id}
        numColumns={'2'}
      />
    </View>
  );
};

export default ProductStore;
