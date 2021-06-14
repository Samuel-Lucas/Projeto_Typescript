class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao); // Método para armazenar no array de negociações
        this._negociacoesView.update(this._negociacoes);
        /* this._negociacoes.paraArray().length = 0;
         
         this._negociacoes.paraArray().forEach(negociacao => {
             console.log(negociacao.data);
             console.log(negociacao.quantidade);
             console.log(negociacao.valor);
         });
         */
    }
}
