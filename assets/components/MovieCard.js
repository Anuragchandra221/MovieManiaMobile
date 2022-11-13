import { Text,Image,View } from "react-native";
import { get_image_original } from "../service";
export default function MovieCard({item}){
    return (
        <View>
            <Image
            style={styles.img}
            source={{
                uri: get_image_original(item.poster_path)
            }}
            />
            <Text style={styles.text} numberOfLines={3}>{item.title}</Text>
        </View>
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