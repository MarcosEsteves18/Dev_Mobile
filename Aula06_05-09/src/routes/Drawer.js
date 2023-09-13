import { createDrawerNavigator } from "@react-navigation/drawer"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import TelaJAPA from "../views/TelaJAPA"
import TelaD from "../views/TelaD"
import Tab from "./tab"

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator screenOptions={{headerShown: false}} >
    {/* <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName ="TelaD"></Drawer.Navigator>  initial serve para em iniciar em uma tela epecifica*/}

        <Drawer.Screen name="TelaA" component={TelaA}/>
        <Drawer.Screen name="TelaB" component={TelaB}/>
        <Drawer.Screen name="TelaC" component={TelaC}/>
        <Drawer.Screen name="TelaD" component={TelaD}/>
        <Drawer.Screen name="TelaJAPA" component={TelaJAPA}/>
        <Drawer.Screen name="Tabs" component={Tab}/>
       
    </Drawer.Navigator>

)