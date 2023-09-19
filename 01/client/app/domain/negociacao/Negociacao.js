class Negociacao {
// criamos uma classe (orientação a objeto), com o nome de Negociacao

    constructor(data, quantidade, valor){
        // através do constructor, definimos as proprierades de uma classe
        // cada parâmetro recebido será atrivuido às propriedades da classe

<<<<<<< Updated upstream

        Object.assign(this, { _data:(new Date(data.getTime()), _quantidade: quantidade, _valor: valor)}); //Aqui, simplificamos o código abaixo com o método Object.assign
        
        // this._data = new Date(data.getTime()); //captura a data atual
        // this._quantidade = quantidade;
        // this._valor= valor;

=======
        Object.assign(this, {_data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor});

        this._data= new Date(data.getTime()); //captura a data atual
        this._quantidade = quantidade;
        this._valor= valor;
>>>>>>> Stashed changes
        Object.freeze(this);
        
        /* congela o objeto e não deixa que um novo valor seja atribuído ( x = y)
            Porém ainda é possível alterar através das propriedades do objeto 
            EX:
            (n1.Data.setDate(11))
        */

        /*Através de this.nomeDaPropriedade, especificamos que a
negociação terá: data,	quantidade e valor, cada propriedade
com	seu	valor padrão.*/

    }

    get Volume(){
        return this._quantidade * this._valor;
    }
    // realizando conta de modo eficaz, para não ser repetitivo e não ocorrer erros 
    // Função que define um comportamento de uma classe, ou também, Métodos. ObtemVolume é um método

<<<<<<< Updated upstream
    get Data(){
        return new Date(this._data.getTime());
        /* Programação Defensiva. Fazemos com q o elemento não possa ser alterado de forma alguma
        nem mesmo com o set
        */
=======
    get data(){
        return new Date(this._data.getTime());
>>>>>>> Stashed changes
    }

    get Quantidade(){
        return this._quantidade;
    }

    get Valor(){
        return this._valor;
    }

    // Métodos acessadores, para conseguir imprimir os valores individualmente e não altera-los separadamente, devido ao underline


}


/*Tudo que puder já alterar e deixar pré salvo no arquivo JS melhor, pois asssim não deixa brechas para que alguém altere no index.html.
Usamos getTime na data, para que não seja atribuído o valor de uma variável no html, assim permitindo que quando alterar o valor da variável
consequêntemente alteraria o valor atual, que deve ser salvo, assim seria falho*/


/*Ob*/