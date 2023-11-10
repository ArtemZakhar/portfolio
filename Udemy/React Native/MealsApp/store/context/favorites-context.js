import { createContext, useState } from 'react';

export const FavoritesContex = createContext({
 ids: [],
 addFavorite: (id) => {},
 removeFavorite: (id) => {},
});

function FavoritesContexProvider({ children }) {
 const [favoriteMealIds, setFavoriteMealIds] = useState([]);

 function addFavorite(id) {
  setFavoriteMealIds((prevState) => {
   return [...prevState, id];
  });
 }

 function removeFavorite(id) {
  setFavoriteMealIds((prevState) => {
   return prevState.filter((mealId) => mealId !== id);
  });
 }

 const value = {
  ids: favoriteMealIds,
  addFavorite: addFavorite,
  removeFavorite: removeFavorite,
 };

 return <FavoritesContex.Provider value={value}>{children}</FavoritesContex.Provider>;
}

export default FavoritesContexProvider;
