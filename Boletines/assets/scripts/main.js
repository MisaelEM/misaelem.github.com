'use strict'
console.log('Hola mundo')

//DOM
//hacer una busqueda de un elemento de CSS con jS
let container = document.querySelector('.content')
console.log(container)
//mostrar en un arreglo todos los elementos 'a' de nuestro dosumento
let tabla = document.querySelectorAll('a')
console.log(tabla)
//mostrar individualmente los elementos de la busqueda nterior
tabla.forEach(function(link){
	console.log(link)
})

let celdas = document.querySelectorAll('td')
//EVENTOS
//al hacer click en el elemto seleccionado realizar una accion
celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log('Click', this) //this muestra el contenido seleccionado
	})
})

let boton = document.querySelectorAll('button')

boton.forEach(function(button){
	button.addEventListener('click',function(ev){
		console.log('click en el boton')
	})
})