class DealView {

    constructor(element) {

        this._element = element;
    }

    _template(model) {
        //ao retornar uma template string, eu utilizo `` ao invés de '' que requer a concatenação por linha
        //com isso não manipulamos o dom de maneira imperativa, mas sim declarativa
        //como temos apenas um argumento na arrow function, não é necessário usar o () e como o retorno é único, não é necessário usar as {} nem o return
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.deals.map(deal => 
                    `
                        <tr>
                            <td>${DateHelper.dateDefaultFormat(deal.date)}</td>
                            <td>${deal.quantity}</td>
                            <td>${deal.valuation}</td>
                            <td>${deal.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(model) {

        this._element.innerHTML = this._template(model);
    }
}
/**
 * 

*/