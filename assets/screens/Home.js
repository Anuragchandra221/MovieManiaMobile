import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Genres from '../components/Genres';
import { useFonts } from 'expo-font';
import Trending from '../components/Trending';
import NewReleases from '../components/NewReleases';
import Upcoming from '../components/Upcoming';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';
import Slider from '../components/Slider';


export default function Home({navigation}) {
    const [fontsLoaded] = useFonts({
        'originalSurfer':require('../fonts/OriginalSurfer-Regular.ttf')
    })
  return fontsLoaded? (
    <ScrollView style={styles.container}>
      <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headerText}>M<Text style={{color: '#FFF'}}>ovie</Text>M<Text style={{color: '#FFF'}}>ania</Text></Text>
        <Ionicons name="search" onPress={()=>{navigation.push("Search")}} style={{marginTop: 46, marginRight: 12}} size={28} color="#FFAD00" />
      </View>
        <StatusBar style="light"/>
        {/* <Search /> */}
        {/* <Genres /> */}
        <Slider />
        <Text style={styles.heading}>
            Trending <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <Trending navigation={navigation} />
        <Text style={styles.heading}>
            New Releases <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <NewReleases navigation={navigation} />
        <Text style={styles.heading}>
            Coming Soon <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <Upcoming navigation={navigation} />
        <Footer />
    </ScrollView>
  ):<></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    marginTop: 40,
    marginLeft:12,
    color: '#FFAD00',
    fontSize: 28,
    fontFamily: 'originalSurfer'
  },
  heading: {
    color: '#FFF',
    marginTop: 22,
    marginLeft: 12,
    fontSize: 22
  }
});
