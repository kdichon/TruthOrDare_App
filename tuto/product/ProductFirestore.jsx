import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import CardProduct from './components/CardProduct';
import {Button} from 'react-native-paper';
import {stylesProduct} from './stylesProduct';

const ProductFirestore = () => {
  const [products, setProducts] = useState([]);
  //   initialisation des dataProducts
  const init = async () => {
    // lecture des datas de la collection sur Firestore
    const snapData = await firestore().collection('product').limit(10).get();
    console.log('snapData', snapData);
    const dataProducts = snapData.docs.map(product => {
      // Récupération des Datas de firestore en modifiant l'id d'origine avec celui de firestore
      const newData = {...product.data(), id: product.id};
      return newData;
    });
    setProducts(dataProducts);
  };

  const ascProduct = async () => {
    // lecture des datas de la collection sur Firestore
    const snapData = await firestore()
      .collection('product')
      .orderBy('price', 'asc')
      .get();
    console.log('snapData', snapData);
    const dataProducts = snapData.docs.map(product => {
      // Récupération des Datas de firestore en modifiant l'id d'origine avec celui de firestore
      const newData = {...product.data(), id: product.id};
      return newData;
    });
    setProducts(dataProducts);
  };

  const descProduct = async () => {
    // lecture des datas de la collection sur Firestore
    const snapData = await firestore()
      .collection('product')
      .orderBy('price', 'desc')
      .get();
    console.log('snapData', snapData);
    const dataProducts = snapData.docs.map(product => {
      // Récupération des Datas de firestore en modifiant l'id d'origine avec celui de firestore
      const newData = {...product.data(), id: product.id};
      return newData;
    });
    setProducts(dataProducts);
  };

  useEffect(() => {
    console.log('component load');
    init();
  }, []);

  firestore();
  return (
    <View>
      <Text>Product Firestore</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button style={stylesProduct.contentButtonFilter} onPress={ascProduct}>
          asc
        </Button>
        <Button style={stylesProduct.contentButtonFilter} onPress={init}>
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

export default ProductFirestore;
