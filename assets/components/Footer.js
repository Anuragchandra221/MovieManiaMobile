import { Text,View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>M<Text style={{color: '#FFF'}}>ovie</Text>M<Text style={{color: '#FFF'}}>ania</Text></Text>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                <Ionicons name="logo-instagram" size={24} color="#FFAD00" />
                </Text>
                <Text style={styles.icon}>
                <Ionicons name="logo-facebook" size={24} color="#FFAD00" />
                </Text>
                <Text style={styles.icon}>
                <Ionicons name="logo-twitter" size={24} color="#FFAD00" />
                </Text>
                <Text style={styles.icon}>
                <Ionicons name="logo-youtube" size={24} color="#FFAD00" />
                </Text>
            </View>
            <Text style={styles.text}>About | Terms and Conditions | Services | Contact | Donate</Text>
            <Text style={{...styles.text,textAlign:'center',paddingHorizontal: 10, lineHeight:20}}>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</Text>
            
            
        </View>
    )
}
const styles = {
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        marginTop: 40,
        marginBottom: 8,
        marginLeft:12,
        color: '#FFAD00',
        fontSize: 28,
        fontFamily: 'originalSurfer'
    },
    text:{
        marginBottom: 8,
        color:'#FFF'
    },
    iconContainer:{
        flex:1,
        flexDirection: 'row',
        marginBottom: 10
    },
    icon:{
        marginRight: 10
    }
}