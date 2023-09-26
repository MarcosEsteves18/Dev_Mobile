import { useContext, useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import Estilo from "../components/Estilo";
import UserContext from "../context/UserContext";



export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route.params))
    const {dispatch} = useContext(UserContext)
    const [userParam, setUserParam] = useState(route.params ? route.params : {})
    return(
        <>
            <View style={Estilo.formContainer}>
                <Text style={Estilo.formInputDescription}>Nome:</Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.name}
                    onChangeText={ name => setUserParam({...userParam, name})}
                />
                 <Text style={Estilo.formInputDescription}>Email:</Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.email}
                    onChangeText={ email => setUserParam({...userParam, email})}
                />
                 <Text style={Estilo.formInputDescription}>Avatar:</Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.avatarUrl}
                    onChangeText={ avatarUrl => setUserParam({...userParam, avatarUrl})}
                />
                <Button
                    style={Estilo.formButtonSubmit}
                    title="salvar"
                    onPress={() => {
                        dispatch({
                            type: userParam.id ? 'updateUser': 'createUser',
                            payload: userParam
                        })
                        navigation.goBack()
                    }}
                />
            </View>
            
        </>
    )
    
}