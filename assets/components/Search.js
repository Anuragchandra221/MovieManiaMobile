import { View,Text, TextInput } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { search } from "../service";
import Suggetions from "./Suggetions";
import ItemSeparator from "./ItemSeparator";
export default function Search(){
    const [text, setText] = useState('')
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        search(text).then((result)=>{
            setMovie(result.data.results)
          })
    }, [text])
    return(
        <View style={styles.container}>
            <Ionicons style={{marginLeft: 10}} name="search" size={24} color="#FFAD00" />
            <TextInput 
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={"#bcc0c4"}
            value={text}
            onChangeText={(e)=>setText(e)}
            />
            
            {movie?<View style={{}}>
                {movie.map((item, key)=>{
                    return (
                        <Text style={{color: '#fff'}}>{item.title}</Text>
                    )
                })}
            </View>:<></>}
        </View>
    )
}
const styles = {
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFAD00',
        padding: 0,
        height: 50,
        marginVertical: 15,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    input:{
        height: 50,
        padding: 10,
    }
}