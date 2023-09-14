import { FlatList, Text, View, Alert} from "react-native";
import users from "../data/users";
import {Avatar, ListItem} from '@rneui/themed';
 


export default props => {
    function deleteConfirm(user){
        Alert.alert('Excluir usuário!', 'Tem certeza que deseja excluir o usuário?', 
            [
              {
                text: "Sim",
                onPress(){
                    console.warn("Excluido o id: " + user.id)
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
                data={users}
                keyExtractor={user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )
    
    
}