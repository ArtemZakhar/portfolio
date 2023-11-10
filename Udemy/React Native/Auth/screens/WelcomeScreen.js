import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [message, setMessage] = useState();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    fetch(
      `https://react-native-course-4b82f-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`
    )
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
