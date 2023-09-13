import { Button } from "react-native";
import { View } from "react-native";

export default props => (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>

        {
            props.voltar
                ?   <Button 
                        title="Voltar"
                        onPress={()=>{
                            props.navigation.goBack()
                        }}
                    />   
                :false 
        }
            {
                props.avancar 
                ?   <Button 
                        title="Avaçar"
                        onPress={()=>{
                            //props.navigation.navigate(props.avancar)
                            props.navigation.push(props.avancar, props.avancarParam || null)
                        
                        }}
                    />
                :false
            }

        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>

    </View>
)