import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CarroProvider } from "./context/CarroContext"
import { NavigationContainer } from "@react-navigation/native"
import login from "./pages/login"
import listaCarros from "./pages/listaCarros"

const Stack = createNativeStackNavigator()

export default props => (
    <CarroProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={minhaScreenOptions}
            >
                <Stack.Screen
                    name="Login"
                    component={login}
                >
                </Stack.Screen>

                <Stack.Screen
                    name="ListaCarros"
                    component={listaCarros}
                   
                />

            </Stack.Navigator>
        </NavigationContainer>

    </CarroProvider>
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