import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import CardProduct from './components/CardProduct';

const ProductFirestore = () => {
  const [products, setProducts] = useState([]);
  //   initialisation des dataProducts
  const init = async () => {
    // lecture des datas de la collection sur Firestore
    const snapData = await firestore().collection('product').get();
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
