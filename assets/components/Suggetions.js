import { View, FlatList, Text } from "react-native"
import ItemSeparator from "./ItemSeparator"
export default function Suggetions({data}){
    return data?(
        <View style={styles.container}>
            {data.map((item, key)=>{
                return (
                    <Text style={{color: '#fff'}}>{item.title}</Text>
                )
            })}
        </View>
    ):<></>
}
const styles = {
    container: {
        backgroundColor: '#000',
        color: '#fff',
        height: 100,
        overflow: 'scroll',
        marginTop: 160,
        zIndex: 1
    }
}