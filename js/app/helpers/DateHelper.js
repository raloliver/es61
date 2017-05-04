class DateHelper {
    //definição do constructor apenas para alertar que não é necessário instanciar a classe
    constructor() {
        //a maioria das classes que existem hoje no JS, ñ são classe, mas sim funções construtoras.
        throw new Error('Não é necessário instanciar esta classe.');
    }
    //por padrão é criado um constructor vazio nessa aqui.
    //como ñ foi definido um constructor, eu ñ insiro propriedades nessa classe
    /**
     * ao usar o static, você invoca o método diretamente, mas sem instanciar a classe
     */
    static dateTextFormat(string) {
        return new Date(...string.split('-').map((item, index) => item - index % 2));
    }

    static dateDefaultFormat(format) {
        return format.getDate() + '/' + (format.getMonth() + 1) + '/' + format.getFullYear();
    }
}