import { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/FavoritesSlice';

function MeatDetailScreen({ route, navigation }) {
 const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
 const dispatch = useDispatch();
 const mealId = route.params.mealId;
 const choosenMeal = MEALS.find((item) => item.id === mealId);

 const mealIsFavorite = favoriteMealIds.includes(mealId);

 function changeHandlerStatusHandler() {
  if (mealIsFavorite) {
   dispatch(removeFavorite({ id: mealId }));
  } else {
   dispatch(addFavorite({ id: mealId }));
  }
 }

 useLayoutEffect(() => {
  const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
  navigation.setOptions({
   title: mealTitle,
   contentStyle: { backgroundColor: '#fff' },
   headerRight: () => {
    return (
     <IconButton onPress={changeHandlerStatusHandler} icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" />
    );
   },
  });
 }, [mealId, navigation, changeHandlerStatusHandler]);

 return (
  <ScrollView style={styles.conteiner}>
   <Image style={styles.image} source={{ uri: choosenMeal.imageUrl }} />
   <Text style={styles.title}>{choosenMeal.title}</Text>
   <View style={styles.details}>
    <Text style={styles.detailesItem}>{choosenMeal.duration}m</Text>
    <Text style={styles.detailesItem}>{choosenMeal.complexity.toUpperCase()}</Text>
    <Text style={styles.detailesItem}>{choosenMeal.affordability.toUpperCase()}</Text>
   </View>
   <View style={styles.listOuterContainer}>
    <View style={styles.listContainer}>
     <Subtitle>Ingredients</Subtitle>
     <List array={choosenMeal.ingredients} />
     <Subtitle>Steps</Subtitle>
     <List array={choosenMeal.steps} />
    </View>
   </View>
  </ScrollView>
 );
}

export default MeatDetailScreen;

const styles = StyleSheet.create({
 conteiner: {
  flex: 1,
  margin: 8,
  marginBottom: 32,
 },
 details: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
 },
 detailesItem: {
  marginHorizontal: 4,
  fontSize: 14,
 },
 image: {
  width: '100%',
  height: 350,
 },
 title: {
  fontWeight: 'bold',
  fontSize: 24,
  margin: 8,
  textAlign: 'center',
 },
 listOuterContainer: {
  alignItems: 'center',
 },
 listContainer: {
  width: '80%',
 },
});
