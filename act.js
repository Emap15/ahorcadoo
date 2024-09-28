let arreglo  = [
    "manzana", "banana", "naranja", "uva", "pera", "kiwi", "fresa", "mango", "piña", "cereza",
    "sandía", "melón", "papaya", "higo", "ciruela", "granada", "frambuesa", "mora", "limón", "lima",
    "aguacate", "coco", "arándano", "nectarina", "durazno", "albaricoque", "pomelo", "mango", "mandarina", "cabel",
    "pescado", "pollo", "carne"
];



function setup() {
createCanvas(900, 800);
  background(70);
  
  stroke(255)
 strokeWeight(4) 
  line(50,80,260,80)
   strokeWeight(4) 
  line(50,550,50,80)

     strokeWeight(4) 
  line(260,150,260,80)
  
   
  noStroke()
  fill(252, 208, 180)
  circle(260,130,50)
  
  
  
  
stroke(255)
 strokeWeight(4) 
  line(0,550,900,550)
   strokeWeight(4) 
  line(650,550,650,0)

  



}

let index = Math.floor(Math.random() * arreglo.length);
let palabraSeleccionada = arreglo[index];

arreglo.splice(index, 1);

console.log("Palabra seleccionada:", palabraSeleccionada);


function draw() {
}n