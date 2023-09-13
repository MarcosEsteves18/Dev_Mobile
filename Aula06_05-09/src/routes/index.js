import { SafeAreaView } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import Tab from "./tab";
import Drawer from "./Drawer";

export default props =>(
    <SafeAreaView style ={{flex:1,}}>
        <NavigationContainer>
             {/* <Tab />  */}
             <Drawer></Drawer> 
        </NavigationContainer>

    </SafeAreaView>
)