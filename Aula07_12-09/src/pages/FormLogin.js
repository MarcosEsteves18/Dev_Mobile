import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView  } from "react-native";
import Estilo from "../components/Estilo";
import { useState } from "react";




   
export default props => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    return(
        <KeyboardAvoidingView style={[Estilo.loginContainer]}>
            <View style={[Estilo.loginContainer]}>
                <Image source={require('../assets/logo.png')} style={Estilo.imagemLogo}></Image>
                {/*<Text>Form Login</Text>*/}
                <TextInput 
                    style={Estilo.loginTextInput}
                    placeholder="Digite o login..."
                    value={valorLogin}
                    onChangeText={(valorLogin) => setValorLogin(valorLogin)}
                />
                <TextInput
                    style={Estilo.loginTextInput}
                    placeholder="Digite a senha..."
                    value={valorSenha}
                    onChangeText={(valorSenha) => setValorSenha(valorSenha)}
                    secureTextEntry = {true}
                    
                />
                <Text style={Estilo.loginForgotPassword}>Esqueceu a sua Senha ?</Text>

                <TouchableOpacity 
                    style={Estilo.loginButton} 
                    onPress={() => props.navigation.navigate("UserList")}
                >
                    <Text>LOGIN</Text>
                </TouchableOpacity>

                <Text style={Estilo.loginForgotPassword}>Criar conta</Text>
                

            </View>
        </KeyboardAvoidingView>
    )
}