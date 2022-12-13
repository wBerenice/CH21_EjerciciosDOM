
//getElementById - busca el primer elemento que tenga el id

let btnEjecutar = document.getElementById("btnEjecutar")

let elementosPorClase = document.getElementsByClassName("list-group-item")
// let main = document.getElementsByClassName("main");


// console.log(elementosPorClase.length);
// console.log(elementosPorClase);

btnEjecutar.addEventListener("click", function(event){
    event.preventDefault();

    //El querySelector trae el primer elemento que coincida 
    // let elemento = document.querySelector("ul > li");
    // console.log(elemento);
    
    // elemento = document.querySelector("ul > li:last-child");
    // console.log(elemento);
    
    // let elementos = document.querySelectorAll("ul > li:last-child")
    // let elementos = document.querySelectorAll("ul > li:nth-child(2)")
    // console.log(elementos); //NodeList

    let btn = document.getElementsByTagName("button");
    console.log(btn);

    let main = document.getElementsByTagName("main");
    console.log(main[0]);

    // for (const elemento of main[0]) {
    //     console.log(elemento);
    // }//for of

    // for (let index = 0; index < main[0].length; index++) {
    //     const element = array[index];
        
    // }

})






