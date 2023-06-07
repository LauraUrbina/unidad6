/* esto es un objeto de Javascript
tiene funciones incluidas
*/
var persona = {
    nombre: "Laura",
    edad: 24,
    genero: true
    mostrar: function(){
        console.log(this.nombre, this.edad, this.genero)
    },
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre)
    },
}

console.log(persona)
persona.mostrar()
persona.saludar()