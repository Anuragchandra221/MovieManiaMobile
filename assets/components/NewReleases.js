import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import {get_new_releases} from "../service"
import ItemSeparator from "./ItemSeparator"
import MovieCard from "./MovieCard"
export default function NewReleases(){
    const [newReleases, setNewReleases] = useState(null)
    useEffect(()=>{
        get_new_releases().then((result)=>{
            setNewReleases(result.data.results)})
        
    },[])
    return newReleases?(
        <View style={styles.container}>
            <FlatList
             data={newReleases} 
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
