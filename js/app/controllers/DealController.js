class DealController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._date = $('#data');
        this._quantity = $('#quantidade');
        this._valuation = $('#valor');
        this._dealList = new DealList();
    }

    add(event) {
        event.preventDefault();

        //criamos uma classe e instânciarmos a mesma para invocarmos os métodos
        //mas também é possível invocar um método definido na classe diretamente, ao invés de necessariamente instânciar a classe
        //let helper = new DateHelper();

        //init
        this._dealList.add(this._createDeal()); //esse deve ser o único jeito de adicionar uma nova negociação
        this._cleanForm();
    }

    //o _ é pra deixar claro que esse método só deve ser chamado por esta classe
    _createDeal() {
        return new Deal(
            DateHelper.dateTextFormat(this._date.value),
            this._quantity.value,
            this._valuation.value
        );
    }

    _cleanForm() {
        this._date.value = '';
        this._quantity.value = 1;
        this._valuation.value = 0.0;
        this._date.focus();
    }

}