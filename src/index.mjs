//Array con objetos anidado
const inventario=[
  {cod:0,clasifica:'aseo',especifica:{nombre:'Jabon', precio:3500}},
  {cod:1,clasifica:'alimentos', especifica:{nombre:'Arroz', precio:1800}},
  {cod:2,clasifica: 'legumbre', especifica: {nombre:'Papa', precio:4000}}
]
let aux =[];
// metodo foreach
inventario.forEach((item)=>{

  aux.push( item.clasifica);
})

console.log(aux);

// Metodo map 
const modi=inventario.map((clasi)=>clasi.clasifica='limpieza');
const texto= inventario.map((text)=>text.length)
console.log(modi[0]);
console.log(texto);


//Metodo filter
const metodofil=inventario.filter((clas)=>clas.cod===0);
console.log(metodofil);

//metodo every
const metodoevery=inventario.every((prueba)=>prueba.cod===0 | prueba.cod===1 | prueba.cod===2)
console.log(metodoevery);