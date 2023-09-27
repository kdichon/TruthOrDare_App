import {createSlice} from '@reduxjs/toolkit';

const initState = {
  players: [
    {id: 1, name: 'Hervé'},
    {id: 2, name: 'Yohan'},
    {id: 3, name: 'Anne'},
    {id: 4, name: 'Ludmilla'},
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
  },
});

export const {addPlayer, deletePlayer, resetPlayer} = player.actions;
export default player.reducer;
