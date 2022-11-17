import { Text,Image, TouchableOpacity } from "react-native";
import { get_image_original } from "../service";

export default function MovieCard(props){
    return (
        <TouchableOpacity onPress={()=>props.navigation.push("Movie", {id:props.item.id})}>
            <Image
            style={styles.img}
            source={{
                uri: get_image_original(props.item.poster_path)
            }}
            />
            <Text style={styles.text} numberOfLines={3}>{props.item.title}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    text:{
        color: '#fff',
        width: 150,
        marginTop: 8
    },
    img:{
        width:130,
        height:190,
        borderRadius: 10
    }
} 