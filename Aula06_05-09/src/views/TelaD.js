import { View } from "react-native";
import TextoCentral from "../components/TextoCentral";
import { Button } from "react-native";


export default props => (
    <View style={{flex:1, paddingTop:35}}>
        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <Button 
                  title="Menu"
                  onPress={
                        ()=>{
                            props.navigation.openDrawer()
                            setTimeout(()=>{props.navigation.closeDrawer()}, 3000)
                        } 
                  }/>
        </View>
        <View style={{flex:1}}>
            <TextoCentral corFundo='blue'>
                Tela D
            </TextoCentral>
        </View>
    </View>

    
)