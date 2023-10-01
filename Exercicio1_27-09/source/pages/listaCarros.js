import {Avatar, ListItem} from '@rneui/themed';
import CarroContext from '../context/CarroContext';
import { FlatList, View} from "react-native";
import { useContext } from "react";


export default props => {
    const {state} = useContext(CarroContext)
        

    function getCarroItem({item : car}){
        console.warn(Object.keys(car))
        return(
             <ListItem 
                 
             >
                 <Avatar 
                     rounded
                     source={{uri: car.fotoUrl}}
                 />
 
                 <ListItem.Content>
                     <ListItem.Title>{car.modelo}</ListItem.Title>
                     <ListItem.Subtitle>{car.marca}</ListItem.Subtitle>
                     <ListItem.Subtitle>{car.ano}</ListItem.Subtitle>
                     <ListItem.Subtitle>{car.valor}</ListItem.Subtitle>
                 </ListItem.Content>
 
                
                 
             </ListItem>
        )
     }

     return(
        <View>
             {console.warn(Object.keys(state.cars))}
            <FlatList 
                data={state.cars}
                keyExtractor={car => car.id}
                renderItem={getCarroItem}
            />
        </View>
    )
}