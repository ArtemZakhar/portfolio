// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealList/MealsList';
// import { FavoritesContex } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

function FavoritesScreen() {
 //  const favoriteMealCtx = useContext(FavoritesContex);
 const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

 const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

 if (favoriteMeals.length === 0) {
  return (
   <View style={styles.rootContainer}>
    <Text style={styles.text}> You have no favourites meals yet.</Text>
   </View>
  );
 }
 return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
 rootContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },
 text: {
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
 },
});
