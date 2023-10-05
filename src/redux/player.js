import {createSlice} from '@reduxjs/toolkit';

const initState = {
  players: [
    {id: 1, name: 'Hervé', tod: []},
    {id: 2, name: 'Yohan', tod: []},
    {id: 3, name: 'Anne', tod: []},
    {id: 4, name: 'Ludmilla', tod: []},
  ],
  position: 0,
};

export const player = createSlice({
  name: 'player',
  initialState: initState,
  reducers: {
    // Ajouter un joueur
    addPlayer: (state, action) => {
      // Ajoute un ou plusieurs éléments à la fin d'un tableau
      // et renvoie sa nouvelle taille
      state.players.push(action.payload);
      return state;
    },
    // Effacer un joueur
    deletePlayer: (state, action) => {
      // Filtrage des données en supprimant l'élément 'action.payload'
      const newPlayers = state.players.filter(
        item => item.id != action.payload.id,
      );
      // Formatage du nouveau tableau
      const newState = {
        players: newPlayers,
        position: state.position,
      };
      return newState;
    },
    // Réinitialisation de la partie
    resetPlayer: (state, action) => {
      // Retour sur une configuration intiale
      return initState;
    },
    // Appelle le prochain joueur de la partie
    nextPlayer: (state, action) => {
      // Déstructuration du tableau avec "...state" (rien ne change à part "position" )
      const newState = {...state, position: action.payload};
      // console.log('Store_nextPlayer', action.payload);
      // Retour sur une configuration intiale
      return newState;
    },
    // Mise à jour du tableau pour les questions tirées
    updTod: (state, action) => {
      // Retour sur une configuration intiale
      // console.log('prev state', state);
      console.log('action payload', action.payload);
      console.log('position', state.players[state.position].tod);
      state.players[state.position].tod.push(action.payload);
      console.log('next state', state);
      // return initState;
    },
  },
});

export const {addPlayer, deletePlayer, resetPlayer, nextPlayer, updTod} =
  player.actions;
export default player.reducer;
