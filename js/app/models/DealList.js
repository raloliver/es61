class DealList {
    //num array comum é possível adicionar, remover, editar itens, no caso deste exemplo, isso ñ será possível, apenas adicionar itens será possível
    constructor() {
        this._deals = [];
    }

    add(deal) {
        this._deals.push(deal);
    }

    get deals() {
        return this._deals;
    }
}