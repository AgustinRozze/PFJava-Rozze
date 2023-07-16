console.table(productos);
const carro = [];
let contenedorProds = document.getElementById('misprods');
let tablaBody = document.getElementById('tablabody');


function renderizarProductos(listaProds){
  
    contenedorProds.innerHTML='';
    
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    }

  
    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
      
        boton.addEventListener('click',()=>{
          
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
           
            agregarACarrito(prodACarro);
        })

       
        boton.onmouseover = () => {
          
            boton.classList.replace('btn-primary','btn-warning');
        }
        boton.onmouseout = () => {
            boton.classList.replace('btn-warning','btn-primary');
        }
    }


}


renderizarProductos(productos);

function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
  
}



    

let nombre = document.getElementById('nombre');
nombre.onkeyup=()=>{
    if(nombre.value.length < 3){
        console.log('Nombre de menos de 3 caracteres');
        nombre.style.color='red';
    }else{
        nombre.style.color='black';
    }
}


nombre.onchange=()=>{
    alert('El nombre se actualizo (cambio)');
}

let email = document.getElementById('email');
email.addEventListener('input',()=>{
    if(!email.value.includes('@') || !email.value.includes('.')){
        document.getElementById('mensaje').innerText='🚨 No olvides el @ ni el .';
    }else{
        document.getElementById('mensaje').innerText='';
    }
})


function borrarCampos(){
    nombre.value = '';
    email.value = '';
}


let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validar);

function validar(ev){
    if((nombre.value=='')||(email.value == '')){
        ev.preventDefault();
        alert('Ingrese nombre o email valido !');
    }
}


let bart = document.getElementById('bart');
bart.style.position='absolute';
bart.style.top = '10px';
bart.style.left = '10px';

document.addEventListener('keyup', function(event){
    if(event.key == 'ArrowRight'){
        bart.style.left = parseInt(bart.style.left) + 50 + 'px';
    }
    if(event.key == 'ArrowLeft'){
        bart.style.left = parseInt(bart.style.left) - 50 + 'px';
    }
});




