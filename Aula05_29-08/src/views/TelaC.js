import TextCentral from "../components/TextCentral";



export default props =>(
    <TextCentral corFundo='#9932cd'>
        Tela C = {props.route.params.numero}
        {props.route.params.nome}
    </TextCentral>
)