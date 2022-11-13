import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import {get_upcoming} from "../service"
import ItemSeparator from "./ItemSeparator"
import MovieCard from "./MovieCard"
export default function Upcoming(){
    const [upcoming, setUpcoming] = useState(null)
    useEffect(()=>{
        get_upcoming().then((result)=>{
            setUpcoming(result.data.results)})
        
    },[])
    return upcoming?(
        <View style={styles.container}>
            <FlatList
             data={upcoming} 
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
