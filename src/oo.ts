// Class -- Precisa das propriedades definidas antes do Constructor;
class Pessoa {
    nome: string;
    renda?: number; // ? -- Define a variável como opcional;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    // Protected -- Só pode ser acessado onde foi criado e por classes herdeiras;
    protected saldo: number = 0;
    // Public -- Acessível em todas as instâncias;
    public numeroConta: number;
    
    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    // Static -- Pertence somente à classe, logo não pode ser acessado por fora; 
    static retornaNumeroDoBanco() {
        return 125;
    }

    // Private -- Somente acessível dentro da classe em que foi definido (mais restritivo);
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
