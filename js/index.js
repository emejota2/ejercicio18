//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
  {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
  {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
  {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
  {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
  {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
  {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
  {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
  {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
  {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
  {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
  {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
  {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
  {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
  {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
  {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
  {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
  ];

  //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN   

window.onload = function(){
  mostrarAutos()
}

let card =document.querySelector("#cards")

const mostrarAutos =()=>{
  autos.forEach(auto => {
    
      card.innerHTML += ` <div class="col-sm-4 mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Marca ${auto.marca}  </h5>
          <p class="card-text">Modelo: ${auto.modelo} - Color: ${auto.color} </p>
          <p class="h6">Precios: ${auto.precio} </p>
          <a href="#" class="btn btn-warning">Mas info +</a>
        </div>
      </div>
    </div> `
  })
  
}

let buscar = document.querySelector('#filtro')
function filtrarAutos(event){
event.preventDefault()
card.innerHTML = ''
autos.filter(auto => {


if(auto.marca.toLowerCase() === buscar.value.toLowerCase()){

card.innerHTML+=(`<div class="card mb-2" style="width:31%">
<div class="card-body">
<h5 class="card-title">${auto.marca}</h5>
<p class="card-text">${auto.modelo} - ${auto.color}</p>
<p class="h6">${auto.precio}</p>
<a href="#" class="btn btn-warning">Mas Info +</a>
</div>
</div>`)
}})

autos.filter(auto => {

if(auto.color.toLowerCase() === buscar.value.toLowerCase()){

card.innerHTML+=(`<div class="card mb-2" style="width:31%">
<div class="card-body">
<h5 class="card-title">${auto.marca}</h5>
<p class="card-text">${auto.modelo} - ${auto.color}</p>
<p class="h6">${auto.precio}</p>
<a href="#" class="btn btn-warning">Mas Info +</a>
</div>
</div>`)
}})}
