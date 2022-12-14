
//getElementById - busca el primer elemento que tenga el id

// let btnEjecutar = document.getElementById("btnEjecutar")

// let elementosPorClase = document.getElementsByClassName("list-group-item");
// let main = document.getElementsByClassName("main");


// console.log(elementosPorClase.length);
// console.log(elementosPorClase);

// btnEjecutar.addEventListener("click", function(event){
//     event.preventDefault();

    //El querySelector trae el primer elemento que coincida 
    // let elemento = document.querySelector("ul > li");
    // console.log(elemento);
    
    // elemento = document.querySelector("ul > li:last-child");
    // console.log(elemento);
    
    // let elementos = document.querySelectorAll("ul > li:last-child")
    // let elementos = document.querySelectorAll("ul > li:nth-child(2)")
    // console.log(elementos); //NodeList

    // let btn = document.getElementsByTagName("button");
    // console.log(btn);

    // let main = document.getElementsByTagName("main");
    // console.log(main[0]);

    // for (const elemento of main[0]) {
    //     console.log(elemento);
    // }//for of

    // for (let index = 0; index < main[0].length; index++) {
    //     const element = array[index];
        
    // }

// })


// let btn = document.getElementsByTagName("button")
//     console.log(btn);


let li = document.createElement("li") //Esto está creando un <li></li> en el HTML
li.innerText = "Another fourth item"; //<li>Another fourth item</li>
li.className = "list-group-item";

let btnEjecutar = document.getElementById("btnEjecutar")
btnEjecutar.addEventListener("click", function(event){
    event.preventDefault();
    
    // console.log(li);

    let ul = document.getElementsByTagName("ul");
    // console.log(ul[0]);

    //prepend = primero de la lista
    ul[0].prepend(li.cloneNode(true));
    //append = últimos de la lista
    ul[1].append(li.cloneNode(true));
    //before = antes del ul
    ul[2].before(li.cloneNode(true));
    //after = después del ul
    ul[3].after(li.cloneNode(true));


    ul[4].insertAdjacentHTML("beforebegin", `<li class="list-group-item list-style">Before begin</li>`);
    ul[4].insertAdjacentHTML("afterbegin", `<li class="list-group-item list-style">after begin</li>`)
    ul[4].insertAdjacentHTML("beforeend", `<li class="list-group-item list-style">before End</li>`)
    ul[4].insertAdjacentHTML("afterend", `<li class="list-group-item list-style">After end</li>`);

})











