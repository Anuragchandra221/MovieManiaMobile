import { Text,Image, View } from "react-native";
import { get_image_original } from "../service";

export default function MovieIntro(props){
    
    return (
        // <View style={styles.container}>
        //     {/* <Image
        //     style={styles.img}
        //     source={{
        //         uri: get_image_original(props.img)
        //     }}
        //     /> */}
        //     {/* <Text style={styles.text} numberOfLines={3}>{props.title}</Text> */}
        //     {/* <Text style={styles.text} numberOfLines={3}>{props.rating}</Text> */}
        // </View>
        <View style={styles.container}>
            <Image
           style={styles.img}
         source={{
          uri: get_image_original(props.img)
          }}
          />
            <Text style={{color:'#fff', textAlign: 'center',fontSize:21, marginTop: 10}}>{props.title}</Text>
            <Text style={{color:'#fff', textAlign: 'center',fontSize:16, marginBottom: 6}}>{props.rating}/10</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
            <Text style={styles.box}>IMDB</Text>
            <Text style={styles.box}>Review</Text>
            </View>
        </View>
    )
}
const styles = {
    container:{
        marginTop: 25,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#fff',
        width: 150,
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 500
    },
    img:{
        width:180,
        height:240,
        borderRadius: 10,
        marginVerical: 8
    },
    box:{
        textAlign: 'center',
        paddingVertical: 5,
        padding: 7,
        color: '#fff',
        borderColor: '#FFAD00',
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 4,
    }
} 