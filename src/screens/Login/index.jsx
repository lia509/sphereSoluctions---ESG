import { TextInput, View,TouchableOpacity,Text,} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { useState } from "react";
import ListaEmps from "../../models/Empresa/EmpRepository";


export default function Home() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const Entrar = () =>{
    console.log("passou aqui");
const login = ListaEmps.getLogin(senha,email);

if(login == false){
alert('Empresa não Cadastrada');
console.log(login);

  }
  else{
    alert('Empresa Cadastrada');
    console.log(login);
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
      <TouchButton route="Cadastro" title="Não possuí conta? Cadastre-se aqui."/>

    </View>
  );
}
