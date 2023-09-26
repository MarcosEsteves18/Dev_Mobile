import { FlatList, Text, View, Alert} from "react-native";
import {Avatar, ListItem} from '@rneui/themed';
import UserContext from "../context/UserContext";
import { useContext } from "react";
 


export default props => {
    const {state, dispatch} = useContext(UserContext)
    //console.warn(Object.keys(cont.state))


    function deleteConfirm(user){
        Alert.alert('Excluir usuário!', 'Tem certeza que deseja excluir o usuário?', 
            [
              {
                text: "Sim",
                onPress(){
                    //console.warn("Excluido o id: " + user.id)
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
              },
              {
                text: "Não",
                
              },
            ]
        )
    }
    function getUserItem({item : user}){
       return(
            <ListItem 
                
            >
                <Avatar 
                    rounded
                    source={{uri: user.avatarUrl}}
                />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Chevron
                    name="edit"
                    color="orange"
                    size={25}
                    onPress={() => props.navigation.navigate("UserForm", user)}

                />
                <ListItem.Chevron
                    name="delete"
                    color="red"
                    size={25}
                    onPress={ () => {deleteConfirm(user)}}

                />
                
            </ListItem>
       )
    }

    return(
        <View>
            <FlatList 
                data={state.users}
                keyExtractor={user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )
    
    
}