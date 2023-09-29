import firestore from '@react-native-firebase/firestore';

//Chargement des données d'une collection à partir de son nom
export const loadData = async collectionName => {
  const snapShot = await firestore().collection(collectionName).get();
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

/********
 * Récupération de la liste des Actions ou Questions en fonction de l'ID de la Catégorie
 *
 * params ( id<string> : id category)
 * */

export const loadDataTOD = async id => {
  console.log('loadDataTOD', id);
  const snapShot = await firestore()
    .collection('TruthOrDare')
    .where('category', '==', id)
    .get();
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
