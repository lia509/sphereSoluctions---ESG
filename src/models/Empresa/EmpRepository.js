import Empresa from './Emp.js';
import {empresa} from '../../data/Emp.js';

 class EmpRepository {
    constructor() {
        this.empresas = [];
    }
    conferirirEmps( cnpjEmp, cepEmp){
        return this.empresas.filter(empresa => empresa.cnpjEmp === cnpjEmp && empresa.cepEmp === cepEmp);
       }
    addEmpresa(empresa) {
        this.empresas.push(empresa);
    }

    getAllEmpresas() {
        return this.empresas;
    }
    getEmpresaById(id) {
        return this.empresas.find(empresa => empresa.id === id);
    }
    
    getLogin(senhaEmp, emailEmp) {
        return this.empresas.filter(empresa => empresa.senhaEmp === senhaEmp && empresa.emailEmp === emailEmp);
    }
    removeEmpresa(id) {
        this.empresas = this.empresas.filter(empresa => empresa.id !== id);

    } updatePlanet(id, nome, cnpjEmp, emailEmp, senhaEmp, cepEmp){

        const empresa = this.getEmpresaById(id);

        if(empresa){
            empresa.nome = nome;
            empresa.cnpjEmp = cnpjEmp;
            empresa.emailEmp = emailEmp;
            empresa.senhaEmp = senhaEmp;
            empresa.cepEmp = cepEmp;
        }
        else{
            throw new Error('Empresa not found');
        }
        return empresa;
    }
  
    }
    const ListaEmps = new EmpRepository();
const NovaEmp = new Empresa(empresa.nome, empresa.cnpjEmp, empresa.emailEmp, empresa.senhaEmp, empresa.cepEmp);

ListaEmps.addEmpresa(NovaEmp);

export default ListaEmps;