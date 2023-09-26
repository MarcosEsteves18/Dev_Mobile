import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView  } from "react-native";
import Estilo from "../components/Estilo";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";




   
export default props => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    const {state} = useContext(UserContext)
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
                    onPress={() => {
                        const userLogado = state.users.filter(u => u.login === valorLogin)[0]
                        if(userLogado){
                            userLogado.password == valorSenha ? props.navigation.navigate("UserList") : console.warn("Usuário e/ou Senha incorreta!")
                        }else{
                            console.warn("Usuário e/ou Senha incorreta!")
                        }
                        {/*props.navigation.navigate("UserList")*/}
                    }}
                >
                    <Text>LOGIN</Text>
                </TouchableOpacity>

                <Text style={Estilo.loginForgotPassword}>Criar conta</Text>
                

            </View>
        </KeyboardAvoidingView>
    )
}