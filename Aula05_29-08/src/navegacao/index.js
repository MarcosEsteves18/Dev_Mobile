import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";


export default props => (
    <SafeAreaView style={{flex:1, paddingTop: 30}}>
        <NavigationContainer>
            <Stack>

            </Stack>
        </NavigationContainer>
    </SafeAreaView>
)