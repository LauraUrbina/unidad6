class Autor{
    #Nombre
    #Nacionalidad
    constructor(Nombre, Nacionalidad){
        this.#Nombre = Nombre
        this.#Nacionalidad = Nacionalidad
    }
    getNombre() {return this.#Nombre}
    getNacionalidad() {return this.#Nacionalidad}
}

class Recurso{
    #Titulo
    #Autores
    _TipoRecurso
    get Titulo() {return this.#Titulo}
    getAutores() {return this.#Autores}
    getTipoRecurso() {return this._TipoRecurso}
    constructor(Titulo, Autores){
        if (new.target === Recurso) {
            throw new TypeError ('No puedes instanciar una clase Abstracta')
        }
        this.#Titulo = Titulo
        this.#Autores = Autores
    }
}

class Libro extends Recurso{
    #Editorial
    #Fecha
    #NumPaginas
    getEditorial() {return this.#Editorial}
    getFecha() {return this.#Fecha}
    getNumPaginas() {return this.#NumPaginas}
    constructor(Titulo, Autores, Editorial, Fecha, NumPaginas,){
        super(Titulo, Autores)
        this.#Editorial = Editorial
        this.#Fecha = Fecha
        this.#NumPaginas = NumPaginas
        this._TipoRecurso = "Libro"
    }
}

class Revista extends Recurso{
    #NumArticulos
    #Edicion
    getNumArticulos() {return this.#NumArticulos}
    getEdicion() {return this.#Edicion}
    constructor(Titulo, Autores, NumArticulos, Edicion){
    super(Titulo, Autores)
    this.#NumArticulos = NumArticulos
    this.#Edicion = Edicion
    this._TipoRecurso = "Revista"
}
}

class CD extends Recurso{
    #Duracion
    getDuracion() {return this.#Duracion}
    constructor(Titulo, Autores, Duracion){
        super(Titulo, Autores)
        this.#Duracion = Duracion
        this._TipoRecurso = "CD"
    }
}

//creacion de autores
const autor1 = new Autor("Gabriel garcia Marquez", "Colombiano")
console.log(autor1.getNombre(), autor1.getNacionalidad())

const autor2 = new Autor("Grady Booch", "Estadounidense")
const autor3 = new Autor("James Rumbaugh", "Estadounidense")
const autor4 = new Autor("Ivar Jacobson", "Sueco")
//creacion de recursos
const libro1 = new Libro("Cien Años de Soledad", [autor1], "Oveja Negra", 
    1967, 458)
    console.log("Titulo del", libro1.getTipoRecurso(), ":", libro1.Titulo)
    for(var x in libro1.getAutores()){
        console.log("Autor: ", libro1.getAutores()[0].getNombre(),"(",
        libro1.getAutores()[x].getNacionalidad(),")")
    }
console.log("Editorial: ",libro1.getEditorial())
console.log("Fecha: ",libro1.getFecha())
console.log("Numero de páginas: ",libro1.getNumPaginas())

const libro2 = new Libro("El Lenguaje Unificado de Modelado", [autor2, autor3, autor4], "Pearson", 
    1999, 432)
    console.log("Titulo del", libro2.getTipoRecurso(), ":", libro2.Titulo)
    for(var x in libro2.getAutores()){
        console.log("Autor: ", libro2.getAutores()[x].getNombre(),"(",
        libro2.getAutores()[x].getNacionalidad(),")")
    }
console.log("Editorial: ",libro2.getEditorial())
console.log("Fecha: ",libro2.getFecha())
console.log("Numero de páginas: ",libro2.getNumPaginas())