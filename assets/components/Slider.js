import { useState, useEffect } from "react"
import { View, Image, Text } from "react-native"
import { get_new_releases, get_image_original } from "../service"


export default function Slider(){
    const [img, setImg] = useState(null)
    useEffect(()=>{
        get_new_releases().then((result)=>{
            setImg(result.data.results)
          })
    }, [])
    return img?(
        <View style={{flex:1 , alignItems: 'center', marginTop: 14}}>
            <Image
            style={styles.img}
            source={{
                uri: get_image_original(img[0].backdrop_path)
            }}
            />
            <Text style={styles.text}>{img[0].title}</Text>
        </View>
    ):<></>
}
const styles = {
    text:{
        color: '#fff',
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 24,
        borderWidth: 2,
        borderBottomColor: "#FFAD00"
    },
    img: {
        width:336,
        height:190,
        borderRadius: 10
    }
}