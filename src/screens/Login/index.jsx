import { TextInput, View,TouchableOpacity,Text} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { useState } from "react";
import ListaEmps from "../../models/Empresa/EmpRepository";
import TouchButton from "../../components/TouchButton";


export default function Login() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const Entrar = () =>{
  console.log("passou aqui");
    const login = ListaEmps.getLogin(email,senha);
    console.log(login);
    if(nome == '' || email == '' || senha== ''){
   alert("Preencha todos os campos");
  }else{
  if(!login){
    navigation.navigate('Home');
  }else{
    alert("Email ou senha incorretos");
  }
}  
}
  return (
    <View style={styles.container}>
      <Title title="Login"/>

<TextInput 
style={styles.input} 
placeholder="Nome"
onChangeText={setNome}
value={nome}/>
<View style={styles.linha} ></View>
<TextInput 
style={styles.input} 
placeholder="email"
onChangeText={setEmail}
value={email}/>
<View style={styles.linha} ></View>
<TextInput 
style={styles.input}
 placeholder="senha"
onChangeText={setSenha}
value={senha}/>
<View style={styles.linha} ></View>
<TouchableOpacity  onPress={Entrar} >
  <Text>Entrar</Text></TouchableOpacity>
<TouchButton route="Cadastro" title="Cadastrar" />
    </View>
  );
}
