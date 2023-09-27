import firestore from '@react-native-firebase/firestore';

//Chargement des données d'une collection à partir de son nom
export const loadData = async collectionName => {
  const snapShot = await firestore().collection(collectionName).get();
  // console.log('snapShot', snapShot);
  //Vérification des données
  if (!snapShot.empty) {
    const datas = snapShot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    //Retourne les Datas du tableau
    return datas;
  } else {
    //Retourne un tableau vide
    return [];
  }
};
