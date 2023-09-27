// import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Players from './Players';
import Category from './Category';
import TruthOrDare from './TruthOrDare';
import ShowTruthOrDare from './ShowTruthOrDare';
import {ActivityIndicator, Modal, PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import styles from '../../styles';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Route = () => {
  const loading = useSelector(state => state.loading);
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* Désactivation de l'entête de la Stack */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* Les Vues */}
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="players" component={Players} />
          <Stack.Screen name="category" component={Category} />
          <Stack.Screen name="truthordare" component={TruthOrDare} />
          <Stack.Screen name="showtruthordare" component={ShowTruthOrDare} />
        </Stack.Navigator>
        {/* Modal du Loading */}
        <Modal visible={loading} contentContainerStyle={styles.modal}>
          <ActivityIndicator animating={true} size={50} />
        </Modal>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Route;
