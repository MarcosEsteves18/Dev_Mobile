import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import TelaJAPA from "../views/TelaJAPA"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Stack from "./Stack"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOption={{
        tabBarLabelStyle: {fonteSize:50},
        tabBarActiveTinColor: 'green',
        tabbarInactiveTinColor: 'blue',
        headerShown: false,
        tabBarShowLabel:false,
    }}>
        <Tab.Screen 
            name="Tela A" 
            component = {TelaA}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name='home' color={color} size={size}/>
                )
                
            }} 
        />
        <Tab.Screen 
            name="Tela B" 
            component = {TelaB} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name= 'user-md' color={color} size={size}/>

                )
            }} 
            />
        <Tab.Screen 
            name="Tela C" 
            component = {TelaC} 
            options={{
                tabBarLabel: 'Power OFF',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name='power-off' color={color} size={size}/>

                )
            }} 
            />            
        
        
        <Tab.Screen 
            name="Tela JAPA" 
            component = {TelaJAPA} 
            options={{
                tabBarLabel: 'JAPA',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name='google-plus' color={color} size={size}/>

                )
            }} 
            />         

        <Tab.Screen 
        name="Stack" 
        component = {Stack} 
        options={{
            tabBarLabel: 'Stack',
            tabBarIcon: ({color, size}) =>(
                <FontAwesome name= 'user' color={color} size={size}/>

            )
        }} 
        />
        

    </Tab.Navigator>
)