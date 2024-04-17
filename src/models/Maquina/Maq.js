class Maquina {
    constructor(marca, modelo, funcMaq, combustivel, potencia, quantidade, anoFabricada) {
        this.id= this.GenerateId();
        this.marca = marca;
        this.modelo = modelo;
        this.funcMaq=funcMaq;
        this.combustivel=combustivel;
        this.potencia=potencia;
        this.quantidade=quantidade;
        this.anoFabricada=anoFabricada;
        
    }
    GenerateId() {
        this.id = Math.floor(Math.random() * 1000);
    }
}