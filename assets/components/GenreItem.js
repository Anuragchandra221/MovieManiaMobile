import { View, Text, TouchableOpacity } from "react-native"
const GenreItem = ({item, onPress, active})=>{
    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: active?'#FFAD00':'#000'}} onPress={()=>onPress(item)}>
            <Text style={active?{color: '#000'}:{color: '#FFAD00'}}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        width: 'auto',
        borderWidth: 2,
        borderColor: '#FFAD00',
        
        borderRadius: 10,
        padding: 10
    },
    
}
export default GenreItem         