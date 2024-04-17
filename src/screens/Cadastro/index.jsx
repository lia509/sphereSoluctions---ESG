import { View,TextInput } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import {useState} from 'react';

export default function Category() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');

  const Criar = () =>{
    console.log("passou aqui");
 if( nome != "" || data != "" || cor1 != "" || cor2 != "" || populacao != "" || loc != "" || nome_gov != "" || titulo_gov != ""){
    const newPlanet = new Planet(nome,data,cor1,cor2,populacao,galaxia,ss,coordenadas,nome_gov,titulo_gov);
    planetsRepository.addPlanet(newPlanet);
    ClearInputs();
    navigation.navigate('ListPlanets');
    
  }else{
    alert("Preencha todos os campos");
    ClearInputs();
  }

     navigation.navigate('ListPlanets');
};

};
const ClearInputs = () => {
 setNome("");
 setData("");
 setCor1("");
 setCor2("");
 setPopulacao("");
 setGalaxia("");
 setSs("");
 setCoordenadas("");
 setNome_gov("");
 setTitulo_gov("");
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

