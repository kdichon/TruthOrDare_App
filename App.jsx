import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/screens/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {migrate} from './src/common/DataStore/migrate';

const App = () => {
  useEffect(() => {
    // Fonction pour importer les données de fichier {data.js} vers une collection Firestore
    // migrate();
  }, []);

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
