class DealController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._date = $('#data');
        this._quantity = $('#quantidade');
        this._valuation = $('#valor');
    }

    create(event) {
        event.preventDefault();

        //criamos uma classe e instânciarmos a mesma para invocarmos os métodos
        //mas também é possível invocar um método definido na classe diretamente, ao invés de necessariamente instânciar a classe
        //let helper = new DateHelper();

        let createDeal = new Deal(
            DateHelper.dateTextFormat(this._date.value),
            this._quantity.value,
            this._valuation.value
        );

        console.log(createDeal);
        console.log(DateHelper.dateDefaultFormat(createDeal.date));
    }

}