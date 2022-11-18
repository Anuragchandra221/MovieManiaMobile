import { View,Text, TextInput, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { search } from "../service";
import { ScrollView } from "react-native";
export default function Search({navigation}){
    const [text, setText] = useState('')
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        search(text).then((result)=>{
            setMovie(result.data.results)
          })
    }, [text])
    return(
        <View style={styles.container}>
            <View style={styles.div}>
            <Ionicons style={{marginLeft: 10}} name="search" size={24} color="#FFAD00" />
            <TextInput 
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={"#bcc0c4"}
            value={text}
            onChangeText={(e)=>setText(e)}
            />
            </View>
            {movie?<ScrollView style={{marginLeft: 15, height: 100, overflow: 'visible'}}>
                {movie.map((item, key)=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.push("Movie", {id:item.id})}>
                            <Text key={key}  style={{color: '#fff', marginBottom: 10}}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>:<></>}
        </View>
    )
}
const styles = {
    container:{
        flex:1,
        backgroundColor: '#000',
    },
    div:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        marginTop: 40,
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
        color: '#fff'
    }
}