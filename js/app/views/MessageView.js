class MessageView {

    constructor(element) {
        
        this._element = element;
    }

    _template(model) {
        //condicional ternário para exibir ou não a mensagem
        return model.text ? `<p class="alert alert-success"><strong>${model.text}</strong></p>` : '<p></p>';
    }

    update(model){

        this._element.innerHTML = this._template(model);
    }
}