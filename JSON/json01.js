const JsonObj01 = '{"Nombre":"Felipe","Genero":false,"Edad":47}'
const ObjJs = JSON.parse(JsonObj01)

console.log(JsonObj01)
console.log(ObjJs.Nombre)
console.log(ObjJs.Edad)
console.log(ObjJs.Genero)

/*Ojo si la estructura deJSON tiene errores, el parseo no se realiza*/

