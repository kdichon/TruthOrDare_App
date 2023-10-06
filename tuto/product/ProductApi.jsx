import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button} from 'react-native-paper';
import CardProduct from './components/CardProduct';
import {loading} from '../../src/redux/loading';

const ProductApi = () => {
  // pour contenir les produits
  const [products, setProducts] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Chargement de plus de produits
  const [loadingMore, setLoadingMore] = useState(false);

  //   const [skip, setSkip] = useState(0);

  const init = async () => {
    console.log('init');
    // Interrogation de l'API & Récupération des datas
    const response = await fetch(
      'https://dummyjson.com/products?limit=2&skip=0',
    );
    // Attente de la réponse du JSON
    const productsData = await response.json();

    console.log('response:', productsData);
    setProducts(productsData.products);
    setLoading(false);
  };

  const more = async () => {
    console.log('more');
    setLoadingMore(true);
    const nextSkip = products.length + 1;
    const response = await fetch(
      'https://dummyjson.com/products?limit=2&skip=' + nextSkip,
    );
    // Attente de la réponse du JSON
    const productsData = await response.json();

    const moreProducts = productsData.products;
    const newProducts = [...products, ...moreProducts];
    console.log('response:', newProducts);
    setLoadingMore(false);
    setProducts(newProducts);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View>
      <Text>ProductApi</Text>
      {/* Passage de l'etat de chargement True => False */}
      {loading ? (
        <ActivityIndicator size={20} animating={true} />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <CardProduct product={item} />}
          keyExtractor={item => item.id}
          numColumns={'2'}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator animating={true} />
            ) : (
              // Avec un bouton "More"
              <Button onPress={more}>More</Button>
            )
          }
          onEndReached={more}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default ProductApi;
