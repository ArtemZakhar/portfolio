import { StyleSheet, Text, View } from 'react-native';

function Subtitle({ children }) {
 return (
  <View style={styles.subtitleContainer}>
   <Text style={styles.subtitle}>{children}</Text>
  </View>
 );
}

export default Subtitle;

const styles = StyleSheet.create({
 subtitle: {
  fontWeight: 'bold',
  fontSize: 24,
  textAlign: 'center',
  color: '#e2b497',
 },
 subtitleContainer: {
  marginHorizontal: 12,
  marginVertical: 4,
  borderBottomColor: '#e2b497',
  borderBottomWidth: 2,
  padding: 6,
 },
});