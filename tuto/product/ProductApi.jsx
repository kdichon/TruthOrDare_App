import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import CardProduct from './components/CardProduct';
import {loading} from '../../src/redux/loading';

const ProductApi = () => {
  // pour contenir les produits
  const [products, setProducts] = useState([]);
  // Loading
  const [loading, setLoading] = useState(true);
  // Chargement de plus de produits
  const [loadingMore, setLoadingMore] = useState(true);

  const init = params => {};

  return (
    <View>
      <Text>ProductApi</Text>
      {/* Passage de l'etat de chargement True => False */}
      {loading ? (
        <ActivityIndicator size={20} animating={true} />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => <CardProduct produit={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ProductApi;
