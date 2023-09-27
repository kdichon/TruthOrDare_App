// import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Players from './Players';
import Category from './Category';
import TruthOrDare from './TruthOrDare';
import ShowTruthOrDare from './ShowTruthOrDare';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
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
    </NavigationContainer>
  );
};

export default Route;
