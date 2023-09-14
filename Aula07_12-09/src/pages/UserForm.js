import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Estilo from "../components/Estilo";



export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route.params))
    const [userParam, setUserParam] = useState(route.params ? route.params : {})
    return(
        <>
            <View>
                <Text>Nome:</Text>
                <TextInput 
                    value={userParam.name}
                    onChangeText={ name => setUserParam({...userParam, name})}
                />

            </View>
            
        </>
    )
    
}