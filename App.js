import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './assets/screens/Home'
import Movie from './assets/screens/Movie';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './assets/screens/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Movie" component={Movie} />
        <Stack.Screen options={{headerShown:false}} name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    marginTop: 25,
    marginLeft:10
  },
});
