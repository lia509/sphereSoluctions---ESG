export default class Empresa {
    constructor( nome, cnpjEmp, emailEmp, senhaEmp, cepEmp) {
        this.id = this.GenerateId();
        this.nome = nome;
        this.cnpjEmp = cnpjEmp;
        this.emailEmp = emailEmp;
        this.senhaEmp = senhaEmp;
        this.cepEmp = cepEmp;
    }
    GenerateId() {
        this.id = Math.floor(Math.random() * 1000);
    }
}