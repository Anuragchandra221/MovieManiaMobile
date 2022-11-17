import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import { ScrollView, StyleSheet, Text, FlatList, Image } from 'react-native';
import ItemSeparator from '../components/ItemSeparator';
import { useFonts } from 'expo-font';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { get_movie, get_similar } from '../service';
import MovieIntro from '../components/MovieIntro';
import Cast from '../components/Cast';
import { get_credits } from '../service';
import MovieCard from '../components/MovieCard';


export default function Movie({route, navigation}) {
    const [fontsLoaded] = useFonts({
        'originalSurfer':require('../fonts/OriginalSurfer-Regular.ttf')
    })
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState(null)
    const [similar, setSimilar] = useState(null)
    useEffect(()=>{
        get_movie(route.params.id).then((result)=>{
            setMovie(result.data)})
        get_credits(route.params.id).then((result)=>{
            setCast(result.data)})
        get_similar(route.params.id).then((result)=>{
          setSimilar(result.data.results)
        })
        
    },[])
  return movie && fontsLoaded && cast? (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>M<Text style={{color: '#FFF'}}>ovie</Text>M<Text style={{color: '#FFF'}}>ania</Text></Text>
      <MovieIntro img={movie.poster_path} title={movie.title} rating={movie.vote_average} />
        {/* <MovieCard item={movie} navigation={null}/> */}
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.heading}>
            Cast <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <FlatList
             data={cast.cast} 
             renderItem={({item})=>
             <Cast item={item} />}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item,index)=>index.toString()}
             horizontal={true}
             ListHeaderComponent={<ItemSeparator width={20} />}
             ListFooterComponent={<ItemSeparator width={20} />}
             ItemSeparatorComponent={<ItemSeparator width={15} />}
             
            />
        <Text style={{...styles.heading, marginTop: 1}}>
            Crew <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <FlatList
             data={cast.crew} 
             renderItem={({item})=>
             <Cast item={item} />}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item,index)=>index.toString()}
             horizontal={true}
             ListHeaderComponent={<ItemSeparator width={20} />}
             ListFooterComponent={<ItemSeparator width={20} />}
             ItemSeparatorComponent={<ItemSeparator width={15} />}
             
            />
        <Text style={{...styles.heading, marginTop: 1}}>
            Similar Movies <Text style={{color: '#FFAD00'}}>&gt;</Text>
        </Text>
        <FlatList
             data={similar} 
             renderItem={({item})=>
             <MovieCard item={item} navigation={navigation}/>}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item,index)=>index.toString()}
             horizontal={true}
             ListHeaderComponent={<ItemSeparator width={20} />}
             ListFooterComponent={<ItemSeparator width={20} />}
             ItemSeparatorComponent={<ItemSeparator width={15} />}
             
            />
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
    marginVertical: 18,
    marginLeft: 12,
    fontSize: 22
  },
  overview:{
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 24,
    marginHorizontal: 10,
    fontSize: 15,
  }
});
      