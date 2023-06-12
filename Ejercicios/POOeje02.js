class Producto{
    #FechaCaducidad
    #NumLote
    #PaisOrigen
    #FechaEnvase
    getFechaCaducidad() {return this.#FechaCaducidad}
    getNumLote() {return this.#NumLote}
    getPaisOrigen() {return this.#PaisOrigen}
    getFechaEnvase() {return this.#FechaEnvase}
    constructor(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase){
        this.#FechaCaducidad = FechaCaducidad
        this.#NumLote = NumLote
        this.#PaisOrigen = PaisOrigen
        this.#FechaEnvase = FechaEnvase
    }
}

class ProdFresco extends Producto{
    constructor (FechaCaducidad, NumLote, PaisOrigen, FechaEnvase){
        super(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase)
    }
}

class ProdRefrigerado extends Producto{
    #CodOrgSupAli
    #TempMantRec
    getCodOrgSupAli() {return this.#CodOrgSupAli}
    getTempMantRec() {return this.#TempMantRec}
    constructor (FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, CodOrgSupAli, ){
        super(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase)
        this.#CodOrgSupAli = CodOrgSupAli
        this.#TempMantRec = TempMantRec
    }
}

class ProdCongelado extends Producto{
    #TempMantRec
    getTempMantRec() {return this.#TempMantRec}
    constructor (FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec){
        super(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase)
        this.#TempMantRec = TempMantRec
}
}

class ProdCongeAire extends ProdCongelado{
    #PorNitrogeno
    #PorOxigeno
    #PorDioxidoCarbono
    #PorVaporAgua
    getPorNitrogeno() {return this.#PorNitrogeno}
    getPorOxigeno() {return this.#PorOxigeno}
    getPorDioxidoCarbono() {return this.#PorDioxidoCarbono}
    getVaporAgua() {return this.#PorVaporAgua}
    constructor(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec, PorNitrogeno, PorOxigeno, PorDioxidoCarbono, PorVaporAgua){
        super (FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec)
        this.#PorNitrogeno = PorNitrogeno
        this.#PorOxigeno = PorOxigeno
        this.#PorDioxidoCarbono = PorDioxidoCarbono
        this.#PorVaporAgua = PorVaporAgua
    }
}

class ProdCongeAgua extends ProdCongelado{
    #Salinidad
    getSalinidad() {return this.#Salinidad}
    constructor(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec, Salinidad){
        super(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec)
        this.#Salinidad = Salinidad
    }
}

class ProdCongeNitrogeno extends ProdCongelado{
    #MetodoCongelacion
    #TiempoExpo
    getMetodoCongelacion() {return this.#MetodoCongelacion}
    getTiempoExpo() {return this.#TiempoExpo}
    constructor(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec, MetododCongelacion, TiempoExpo){
        super(FechaCaducidad, NumLote, PaisOrigen, FechaEnvase, TempMantRec)
        this.#MetodoCongelacion = MetododCongelacion
        this.#TiempoExpo = TiempoExpo
    }
}
var MiProd01 = new ProdCongeNitrogeno(new Date ("December 17, 2023"), 13, "Colombia", 
    new Date ("February 12, 2023"), -20, "Nitrogeno Inyectado", 72)
console.log("Metodo de Congelacion: ", MiProd01.getMetodoCongelacion())
console.log("Tiempo de Exposicion: ", MiProd01.getTiempoExpo(), "Segundos")
console.log("Temperatura de Mantenimiento Recomendada: ", MiProd01.getTempMantRec())
console.log("Fecha de caducidad: ", MiProd01.getFechaCaducidad())
console.log("Numero de lote: ", MiProd01.getNumLote())
console.log("Fecha de envasado: ", MiProd01.getFechaEnvase())
console.log("Pais de Origen: ", MiProd01.getPaisOrigen())
