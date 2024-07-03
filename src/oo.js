"use strict";
// Class -- Precisa das propriedades definidas antes do Constructor;
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        // Protected -- Só pode ser acessado onde foi criado e por classes herdeiras;
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    // Static -- Pertence somente à classe, logo não pode ser acessado por fora; 
    static retornaNumeroDoBanco() {
        return 125;
    }
    // Private -- Somente acessível dentro da classe em que foi definido (mais restritivo);
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
