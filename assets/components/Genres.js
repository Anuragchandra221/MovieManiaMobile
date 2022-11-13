import {  View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import GenreItem from "./GenreItem"
import ItemSeparator from "./ItemSeparator"
import { useState } from "react"

export default function Genres(){
    const [genre, setGenre] = useState('All')
    const genres = ['All', 'Action', 'Comedy', 'Drama','Sci-Fi','Thriller']
    return (
        <View style={styles.container}>
            <FlatList
             data={genres} 
             renderItem={({item})=><GenreItem item={item} active={genre==item?true:false} onPress={setGenre}/>}
             showsHorizontalScrollIndicator={false}
             keyExtractor={item=>item}
             horizontal={true}
             ListHeaderComponent={<ItemSeparator width={20} />}
             ListFooterComponent={<ItemSeparator width={20} />}
             ItemSeparatorComponent={<ItemSeparator width={20} />}
             
            />
        </View>
    )

}

const styles = {
    container: {
        marginTop: 15
    }
}