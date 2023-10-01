import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from "react-native"
import Estilo from "../components/Estilo";
import {  useState } from "react";



export default props => {
    [valorCpf, setValorCpf] = useState("");
    [valorSenha, setValorSenha] = useState("");
    

    return (
        <KeyboardAvoidingView style={Estilo.loginContainer}>
            <View style={Estilo.loginContainer}>
                <Image source={require('../assets/Carro_celular.png')} style={Estilo.imagemCentralizada}></Image>
                <TextInput 
                    style={Estilo.loginTextInput}
                    placeholder="Digite seu cpf"
                    value={valorCpf}
                    onChangeText={(valorCpf) => setValorCpf(valorCpf)}
                />
                <TextInput 
                    style={Estilo.loginTextInput}
                    placeholder="Digite sua senha"
                    value={valorCpf}
                    onChangeText={(valorSenha) => setValorSenha(valorSenha)}
                />
                
                <TouchableOpacity
                    style={Estilo.loginButton}
                    onPress={() => props.navigation.navigate("ListaCarros")}
                
                >
                    <Text>LOGIN</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}