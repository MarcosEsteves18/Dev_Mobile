//import {Text, View } from "react-native";
//import Estilo from "./components/Estilo";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import FormLogin from "./pages/FormLogin";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import {Button, Icon} from '@rneui/base'
import { UserProvider } from "./context/UserContext";


const Stack = createNativeStackNavigator()

export default props => (
    <UserProvider>
        <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="FormLogin"
            //screenOptions={{headerShown:false}}
            screenOptions={minhaScreenOptions}
        
        >
            <Stack.Screen 
                name="FormLogin"
                component={FormLogin}
            />

            <Stack.Screen
                name="UserList"
                component={UserList}
                options={
                    ({navigation}) => {
                        return{
                            title:'Lista de Usuários',
                            headerRight: () => (
                                <Button
                                    type="clear"
                                    icon={<Icon name="add" size={25} color='white'/>}
                                    onPress={() => navigation.navigate("UserForm")}
                                />
                            )
                        }
                    }
                }
            />

            <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{title: 'Cadastro de usuário'}}
            />


        </Stack.Navigator>
        </NavigationContainer>
    </UserProvider>

    
    
)

const minhaScreenOptions = {
    headerStyle:{
        backgroundColor: '#79bcec',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
        fontWeight: 'bold',
    },
}