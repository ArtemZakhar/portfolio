import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';

function CategoryGrid({ title, color, onPress }) {
 return (
  <View style={styles.gridItem}>
   <Pressable
    android_ripple={{ color: '#fff' }}
    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressedForIOS : null]}
    onPress={onPress}
   >
    <View style={[styles.innerContainer, { backgroundColor: color }]}>
     <Text style={styles.title}>{title}</Text>
    </View>
   </Pressable>
  </View>
 );
}

export default CategoryGrid;

const styles = StyleSheet.create({
 gridItem: {
  flex: 1,
  margin: 16,
  height: 150,
  borderRadius: 8,
  overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // we lost shadow on IOS in case of 'hidden'
  elevation: 4, //Android
  backgroundColor: 'white', // IOS
  shadowColor: 'black', // IOS
  shadowOffset: { width: 0, height: 2 }, // IOS
  shadowOpacity: 0.25, // IOS
  shadowRadius: 8, // IOS
 },
 buttonPressedForIOS: {
  opacity: 0.5,
 },
 innerContainer: {
  flex: 1,
  padding: 16,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
 },
 button: {
  flex: 1,
 },
 title: {
  fontWeight: 'bold',
  fontSize: 18,
 },
});
