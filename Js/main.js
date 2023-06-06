console.log('Hola Mundo');

let num1=50;
let num2=100;
let saludo='Hola';
let nombreCurso='Codigo LATAM';

let resultadoSuma=num1+num2;
let resultadoResta=num1-num2;
let resultadoMultiplicacion=num1*num2;

console.log(resultadoMultiplicacion);
console.log(resultadoSuma);
console.log(resultadoMultiplicacion);
console.log(`${saludo} Esto es ${nombreCurso}`)
//--------------------------------------------------------

let principal=document.querySelector('.cuerpo-white')
let cubo=document.querySelector(".cubo");
let boton=document.querySelector(".boton-white");
let cajaboton=document.querySelector('.caja-Boton');
let headerwhite=document.querySelector('.header-white');



boton.addEventListener('click',function darkmode(){
   
    cajaboton.classList.toggle('caja-Boton-dark');
    boton.classList.toggle('boton-dark');
    headerwhite.classList.toggle('header-dark');
    principal.classList.toggle('cuerpo-dark');
    
    
})



cubo.addEventListener('click',function mn()
{
    cubo.classList.toggle('cubo-w')
        
});






// let parrafo = document.querySelector('#ejemplo');
// parrafo.addEventListener('click', function(e) {
//  e.target.classList.toggle('parrafo-modificado');
// });