class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones() {
        TweenMax.to(this.listaIcones, 0.7, {scale: 0.9, repeat: -1, yoyo: true}) 
        //TweenMax, é a biblioteca importada no index
        //0.7 é o tempo da animação
        //scale = vai de 1 até 0, é o tamanho
        //repeat = similar com infinite
        //yoyo = similar com alternate, vai e volta
    }
}

export { Icones }