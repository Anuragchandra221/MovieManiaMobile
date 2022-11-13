import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import {get_trending} from "../service"
import ItemSeparator from "./ItemSeparator"
import MovieCard from "./MovieCard"
export default function Trending(){
    const [trending, setTrending] = useState(null)
    useEffect(()=>{
        get_trending().then((result)=>{
            setTrending(result.data.results)})
        
    },[])

    return trending?(
        <View style={styles.container}>
            <FlatList
             data={trending} 
             renderItem={({item})=><MovieCard item={item}/>}
             showsHorizontalScrollIndicator={false}
             keyExtractor={item=>item.id}
             horizontal={true}
             ListHeaderComponent={<ItemSeparator width={20} />}
             ListFooterComponent={<ItemSeparator width={20} />}
             ItemSeparatorComponent={<ItemSeparator width={20} />}
             
            />
        </View>
    ):<></>
}
const styles = {
    container: {
        marginTop: 15
    }
}
