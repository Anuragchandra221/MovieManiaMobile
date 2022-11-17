
import { Text,Image, View } from "react-native";
import { get_image_original } from "../service";

export default function Cast({item}){
    
    return (
        <View style={{textAlign:'center'}}>
            <Image
            style={styles.img}
            source={{
                uri: get_image_original(item.profile_path)
            }}
            />
            <Text style={styles.text} numberOfLines={3}>{item.original_name}</Text>
            {item.character?<Text style={{...styles.text, marginTop: 3}} numberOfLines={3}>{item.character}</Text>:<></>}
            <Text style={{...styles.text, marginTop: 3}} numberOfLines={3}>{item.job}</Text>
        </View>
    )
}
const styles = {
    text:{
        color: '#fff',
        width: 130,
        marginTop: 8,
        textAlign: 'center'
    },
    img:{
        width:130,
        height:190,
        borderRadius: 10
    }
} 