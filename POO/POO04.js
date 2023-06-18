//metodos Getter y Setter
//Clase persona donde todos sus satributos son publicos

class Persona{
    #Nombre = "Adonay"
    //Edad = 32
    #FNac
    #Genero = true
    getNombre() {return this.#Nombre}
    getEdadc() {
        var hoy = new Date()
        return hoy.getFullYear() - this.#FNac.getFullYear()
        }
    getGenero() {return this.#Genero}
    constructor(Nombre, FNacimiento, Genero){
        this.#Nombre = Nombre
        this.#FNac = new Date (FNacimiento)
        this.#Genero = Genero
    }
    get Nombre() {return this.#Nombre}
    get Edad(){
        var hoy = new Date()
        return hoy.getFullYear() - this.#FNac.getFullYear()
    }
    get Genero() {return this.getGenero()}
    //inicio delos metodos setter
    set Nombre(valor) {this.#Nombre = valor}
}
console.log("----Persona----")
/*creaxion de una instancia de la clase Persona*/
var Per01 = new Persona("Luisa", "january 12, 2003", true ) 
//leer los atributos de la instancia

//de aqui en adelante existen 20000 lineas de codigo que no quiero cambiar
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
// escribir sobre los atributos de la instancia
console.log("Cambiando el nombre")
Per01.Nombre ="Camila"
//Per01.Edad = 33
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
console.log(Per01.Nombre, Per01.Edad, Per01.Genero)
