class Negociacao {
// criamos uma classe (orientação a objeto), com o nome de Negociacao

    constructor(data, quantidade, valor){
        // através do constructor, definimos as proprierades de uma classe
        // cada parâmetro recebido será atrivuido às propriedades da classe

        this._data= data; //captura a data atual
        this._quantidade = quantidade;
        this._valor= valor;
        Object.freeze(this);

    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    
}