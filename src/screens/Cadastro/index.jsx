import { View,TextInput ,TouchableOpacity} from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import ListaEmps from "../../models/Empresa/EmpRepository";
import {useState} from 'react';
import Empresa from "../../models/Empresa/Emp";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');


  const Criar = () =>{
    console.log("passou aqui");
    const vr= ListaEmps.conferirirEmps(cnpj,cep);
      console.log(vr);
      if(nome == '' || email == '' || cep == '' || cnpj == '' || senha == ''){
     alert("Preencha todos os campos");
     
    }else{
    if(!vr){
alert("Empresa já cadastrada");
ClearInputs();
    }else{
     console.log("Empresa cadastrada com sucesso");
     const emp = new Empresa(nome,email,cep,cnpj,senha);
      ListaEmps.addEmpresa(emp);
     ClearInputs();
     navigation.navigate('Home');
  
    }
  }  
  }
 
const ClearInputs = () => {
setNome('');
setEmail('');
setCep('');
setCnpj('');
setSenha('');
}

  return (
    <View style={styles.container}>
      <Title title="Cadastro" />
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
placeholder="cep"
onChangeText={setCep}
value={cep}/>
<View style={styles.linha} ></View>
<TextInput 
style={styles.input} 
placeholder="cnpj"
onChangeText={setCnpj}
value={cnpj}/>
<View style={styles.linha} ></View>
<TextInput 
style={styles.input}
 placeholder="senha"
onChangeText={setSenha}
value={senha}/>
<View style={styles.linha} ></View>
<TouchableOpacity onPress={ Criar}  >
  <Text >Criar Cadastro</Text></TouchableOpacity>
    </View>
  );
  
}
















  