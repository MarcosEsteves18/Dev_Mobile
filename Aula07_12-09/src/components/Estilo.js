import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerCentralized:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMedium:{
        fontSize: 35,
        fontWeight: 'bold',

    },
    loginContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003f5c'
    },
    loginTextInput:{
        backgroundColor: "#465881",
        width: 300,
        height: 55,
        marginTop: 30,
        fontSize: 15,
        borderRadius: 30,
        padding: 10,
        color: "#084160"
    },
    loginForgotPassword:{
        color:"#fff",
        marginTop: 25,
        marginBottom: 45,
    },
    loginButton:{
        width: 150,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3cb371',
    },
    imagemLogo:{
        width: 256,
        height: 256,
    },
})