import Maquina from './Maq.js';
import {maquina} from '../../data/Maq.js';

 class MaqRepository {
    constructor() {
        this.maquinas = [];
    }
    addMaq(maquina) {
        this.empresas.push(maquina);
    }
    getAllmaquinas() {
        return this.maquinas;
    }
    getmaquinaById(id) {
        return this.maquinas.find(maquina => maquina.id === id);
    }
    removemaquina(id) {
        this.maquinas = this.maquinas.filter(maquina => maquina.id !== id);

    } updatePlanet(id,marca, modelo, funcMaq, combustivel, potencia, quantidade, anoFabricada){

        const maquina = this.getmaquinaById(id);

        if(maquina){
            maquina.marca = marca;
            maquina.modelo = modelo;
            maquina.funcMaq = funcMaq;
            maquina.combustivel = combustivel;
            maquina.potencia = potencia;
            maquina.quantidade = quantidade;
            maquina.anoFabricada = anoFabricada;

        }
        else{
            throw new Error('Maquina not found');
        }
        return maquina;
    }
  
    }
    const ListMaq = new MaqRepository();
const newMaq = new Maquina(maquina.marca, maquina.modelo, maquina.funcMaq, maquina.combustivel, maquina.potencia, maquina.quantidade, maquina.anoFabricada);

ListMaq.addMaq(newMaq);

export default ListMaq;