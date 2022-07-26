//Aqui se faz a animção dos filtros 

class Footer {
    constructor() {
        this.filtroTurbulencia = document.getElementById("filtro-turbulencia")
    }

    efeitoOnda() {
        TweenMax.to(this.filtroTurbulencia, 20, {
            //chama o atributo que se quer animar
            attr: {
                baseFrequency: 0.03, 
            }, 
            repeat: -1, 
            yoyo: true})
    }
}

export { Footer }