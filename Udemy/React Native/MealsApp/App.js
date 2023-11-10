import 'react-native-gesture-handler';

import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MeatDetailScreen from './screen/MealDetailScreen';
import FavoritesScreen from './screen/FavoritesScreen';
import { Provider } from 'react-redux';
// import FavoritesContexProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
 return (
  <Drawer.Navigator
   screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    headerTitleStyle: {
     fontSize: 16,
    },
    headerTitleAlign: 'center',
    sceneContainerStyle: { backgroundColor: '#351401' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#fff',
   }}
  >
   <Drawer.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
     title: 'All Categories',
     drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="list" />,
    }}
   />
   <Drawer.Screen
    name="Favorites"
    component={FavoritesScreen}
    options={{
     title: 'Favorites',
     drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name="star" />,
    }}
   />
  </Drawer.Navigator>
 );
}

export default function App() {
 return (
  <Fragment>
   <StatusBar style="light" />
   {/* <FavoritesContexProvider> */}
   <Provider store={store}>
    <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
       headerStyle: { backgroundColor: '#351401' },
       headerTintColor: 'white',
       headerTitleStyle: {
        fontSize: 16,
       },
       headerTitleAlign: 'center',
       contentStyle: { backgroundColor: '#351401' },
      }}
     >
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MeatDetailScreen} />
     </Stack.Navigator>
    </NavigationContainer>
   </Provider>
   {/* </FavoritesContexProvider> */}
  </Fragment>
 );
}
