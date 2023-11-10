import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

function MealItem({ id, title, imageUrl, affordability, complexity, duration, onPress }) {
 const navigation = useNavigation();

 function onPressedHandler() {
  navigation.navigate('MealDetail', {
   mealId: id,
  });
 }
 return (
  <View style={styles.mealItem}>
   <Pressable
    android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => (pressed ? styles.buttonPressedForIOS : null)}
    onPressIn={onPressedHandler}
   >
    <View>
     <Image style={styles.image} source={{ uri: imageUrl }} />
     <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.details}>
     <Text style={styles.detailesItem}>{duration}m</Text>
     <Text style={styles.detailesItem}>{complexity.toUpperCase()}</Text>
     <Text style={styles.detailesItem}>{affordability.toUpperCase()}</Text>
    </View>
   </Pressable>
  </View>
 );
}

export default MealItem;

const styles = StyleSheet.create({
 mealItem: {
  margin: 16,
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: 'white',
  elevation: 4, //Android
  backgroundColor: 'white', // IOS
  shadowColor: 'black', // IOS
  shadowOffset: { width: 0, height: 2 }, // IOS
  shadowOpacity: 0.25, // IOS
  shadowRadius: 8, // IOS
  overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // we lost shadow on IOS in case of 'hidden'
 },
 image: {
  minWidth: '100%',
  width: '100%',
  height: 200,
 },
 title: {
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  margin: 8,
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
 buttonPressedForIOS: {
  opacity: 0.5,
 },
});
