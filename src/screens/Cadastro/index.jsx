import { View,TextInput } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import {useState} from 'react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');


  const Criar = () =>{
    console.log("passou aqui");
 if( nome != "" && email != "" && cep != "" && cnpj != "" && senha != ""){
    const newEmp = new Emp(nome,email,cep,cnpj,senha);
    EmpRepository.addEmpresa(newEmp);
    ClearInputs();
    alert("Empresa cadastrada com sucesso!");
    navigation.navigate('Home');
    
  }else{
    ClearInputs();
    return alert("Preencha todos os campos");

  }

}
const ClearInputs = () => {
setNome('');
setEmail('');
setCep('');
setCnpj('');
};
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
<TouchButton onPress={Criar()}><title>Enviar Cadastro</title></TouchButton>
    </View>
  );
  
}
















  