
let data = [
    {
        nombre: 'Nombre Mascota 1',
        tipo: 'Perro',
        propietario: 'Propietario 1',
        fecha: '2024-06-25',
        telefono: '1234567890',
        hora: '10:00',
        sintomas: 'Síntomas de la mascota 1',
        estado: 'abiertas'
    },
    {
        nombre: 'Nombre Mascota 2',
        tipo: 'Caballo',
        propietario: 'Propietario 2',
        fecha: '2024-06-26',
        telefono: '0987654321',
        hora: '03:00',
        sintomas: 'Síntomas de la mascota 2',
        estado: 'abiertas'
    },
    {
        nombre: 'Nombre Mascota 2',
        tipo: 'Pez',
        propietario: 'Propietario 2',
        fecha: '2024-06-26',
        telefono: '0987654321',
        hora: '03:00',
        sintomas: 'Síntomas de la mascota 2',
        estado: 'abiertas'
    },
    {
        nombre: 'Nombre Mascota 1',
        tipo: 'Gallina',
        propietario: 'Propietario 1',
        fecha: '2024-06-25',
        telefono: '1234567890',
        hora: '10:00',
        sintomas: 'Síntomas de la mascota 1',
        estado: 'abiertas'
    }, {
        nombre: 'Nombre Mascota 1',
        tipo: 'Perro',
        propietario: 'Propietario 1',
        fecha: '2024-06-25',
        telefono: '1234567890',
        hora: '10:00',
        sintomas: 'Síntomas de la mascota 1',
        estado: 'abiertas'
    },
    {
        nombre: 'Nombre Mascota 2',
        tipo: 'Pez',
        propietario: 'Propietario 2',
        fecha: '2024-06-26',
        telefono: '0987654321',
        hora: '03:00',
        sintomas: 'Síntomas de la mascota 2',
        estado: 'abiertas'
    },
    {
        nombre: 'Nombre Mascota 2',
        tipo: 'Pez',
        propietario: 'Propietario 2',
        fecha: '2024-06-26',
        telefono: '0987654321',
        hora: '03:00',
        sintomas: 'Síntomas de la mascota 2',
        estado: 'abiertas'
    }
];

let id = 0;
let bd = false;
let est = "";


let estadoSeleccionado = "";

function seleccionarEstado(estado) {
    estadoSeleccionado = estado;
 
}

function registrar() {



    if (bd === true) {
        const registro = data[id];
        registro.nombre = document.getElementById("nombre").value;
        registro.tipo = document.getElementById("tipo").value;
        registro.propietario = document.getElementById("propietario").value;
        registro.fecha = document.getElementById("fecha").value;
        registro.telefono = document.getElementById("telefono").value;
        registro.hora = document.getElementById("hora").value;
        registro.sintomas = document.querySelector('.enfermo').value;
        registro.estado = est;
        bd = false;
     
        var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal')).hide(); 
        mostrarAcavanExtendidoModal();  
        new bootstrap.Modal(document.getElementById('exampleModalExtendido')).show();

   
    
    }
    else {
        let datos = {
            nombre: document.getElementById("nombre").value,
            tipo: document.getElementById("tipo").value,
            propietario: document.getElementById("propietario").value,
            fecha: document.getElementById("fecha").value,
            telefono: document.getElementById("telefono").value,
            hora: document.getElementById("hora").value,
            sintomas: document.querySelector('.enfermo').value,
            estado: 'abiertas'
        };

        data.push(datos);
    }
    limpiarFormulario();
}


function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("tipo").value = "seleccione";
    document.getElementById("propietario").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("hora").value = "";
    document.querySelector('.enfermo').value = "";
    document.getElementById("animal-image").src = "default.jpg";
}


function validar() {
    const hora = document.getElementById("hora").value;
    const fecha = document.getElementById("fecha").value;
    const sintomas = document.querySelector(".enfermo").value;
    const today = new Date().toISOString().split('T')[0];
    const minTime = "08:00";
    const maxTime = "20:00";

    if (document.getElementById("nombre").value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que el campo nombre no está completo!",
        });
    } else if (document.getElementById("tipo").value === "seleccione") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor seleccione un tipo válido!",
        });
    } else if (document.getElementById("propietario").value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que el campo propietario no está completo!",
        });
    } else if (document.getElementById("telefono").value.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor digite un telefono valido!",
        });
    } else if (!fecha) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor seleccione una fecha!",
        });
    } else if (fecha <= today) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La fecha debe ser mayor a la fecha actual!",
        });
    } else if (!hora) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor seleccione una hora!",
        });
    } else if (hora < minTime || hora > maxTime) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La hora debe estar entre 08:00 AM y 08:00 PM!",
        });
    } else if (sintomas === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor digite los síntomas!",
        });
    } else {
        registrar();
    }
}

document.getElementById('tipo').addEventListener('change', function () {
    var image = document.getElementById('animal-image');
    var selectedValue = this.value;

    if (selectedValue === 'Perro') {
        image.src = 'perro.jpg';
    } else if (selectedValue === 'Gato') {
        image.src = 'gato.jpg';
    } else if (selectedValue === 'Pez') {
        image.src = 'pez.png';
    } else if (selectedValue === 'Caballo') {
        image.src = 'Caballo.jpg';
    } else if (selectedValue === 'Conejo') {
        image.src = 'Conejo.jpg';
    } else if (selectedValue === 'Pato') {
        image.src = 'Pato.jpg';
    } else if (selectedValue === 'Gallina') {
        image.src = 'Gallina.jpg';
    }
    else {
        image.src = 'default.jpg';
    }
});

function mostrarAcavanExtendidoModal() {

    var modalBody = document.querySelector('#exampleModalExtendido .modal-body');
    modalBody.innerHTML = '';



    const datosFiltrados = data.filter(datos => datos.estado === estadoSeleccionado);
    console.log(datosFiltrados.length)



    if (datosFiltrados.length < 1) {

        var rowDiv = document.createElement('div');
        rowDiv.className = 'col mt-3 acavan';



        var col1 = document.createElement('div');
        col1.className = 'col';
        col1.innerHTML = `
            <img src="default.jpg" class="img-fluid rounded-start" alt="dafault">
            <h2>Nombre: </h2>
            <div class="nombre-mascota"><h3>'Sin Contenido'</h3></div>
            <h2>Tipo: </h2>
            <div class="tipo-mascota"><h3>'Sin Contenido'</h3></div>
           
        `;

        var col2 = document.createElement('div');
        col2.className = 'col mt-1';
        col2.innerHTML = `
    
        <div class="cabeza">
        
            <div class="cabeza1">
                <h4>Propietario: </h4>
                <div class="propietario-mascota">
                    <h3>'Sin Contenido'</h3>
                </div>
                <h4>Fecha: </h4>
                <div class="fecha-mascota">
                    <h3>'0000-00-00'</h3>
                </div>
            </div>
            <div class="cabeza2">
                <h4>Telefono: </h4>
                <div class="telefono-mascota">
                    <h3>'0'</h3>
                </div>
                <h4>Hora: </h4>
                <div class="hora-mascota">
                    <h3>'00:00'</h3>
                </div>
            </div>
        </div>        
    
     
        
        <div class="cola">  
            <div class="cola1">
                <h6>Sintomas: </h6>                  
                <div class="sintomas-mascota">
                    <h3>'Sin Contenido'</h3>
                </div>        
            </div>
            <div class="cola2">
                
            </div>
        </div>     
              
            `;

        rowDiv.appendChild(col1);
        rowDiv.appendChild(col2);

        modalBody.appendChild(rowDiv);
    }

    data.forEach((datos, index) => {


        if (datos.estado === estadoSeleccionado) {


            if (datosFiltrados.length > 0 && 'abiertas' === estadoSeleccionado) {



                var rowDiv = document.createElement('div');
                rowDiv.className = 'col mt-3 acavan';



                var col1 = document.createElement('div');
                col1.className = 'col';
                col1.innerHTML = `
            <img src=" ${datos.tipo === 'Perro' ? 'perro.jpg' :
                        datos.tipo === 'Gato' ? 'gato.jpg' :
                            datos.tipo === 'Pez' ? 'pez.png' :
                                datos.tipo === 'Caballo' ? 'Caballo.jpg' :
                                    datos.tipo === 'Conejo' ? 'Conejo.jpg' :
                                        datos.tipo === 'Pato' ? 'Pato.jpg' :
                                            datos.tipo === 'Gallina' ? 'Gallina.jpg' : 'default.jpg'
                    } " class="img-fluid rounded-start" alt="${datos.tipo}">
            <h2>Nombre: </h2>
            <div class="nombre-mascota"><h3>${datos.nombre}</h3></div>
            <h2>Tipo: </h2>
            <div class="tipo-mascota"><h3>${datos.tipo}</h3></div>
           
        `;

                var col2 = document.createElement('div');
                col2.className = 'col mt-1';
                col2.innerHTML = `

        <div class="cabeza">
        
            <div class="cabeza1">
                <h4>Propietario: </h4>
                <div class="propietario-mascota">
                    <h3>${datos.propietario}</h3>
                </div>
                <h4>Fecha: </h4>
                <div class="fecha-mascota">
                    <h3>${datos.fecha}</h3>
                </div>
            </div>
            <div class="cabeza2">
                <h4>Telefono: </h4>
                <div class="telefono-mascota">
                    <h3>${datos.telefono}</h3>
                </div>
                <h4>Hora: </h4>
                <div class="hora-mascota">
                    <h3>${datos.hora}</h3>
                </div>
            </div>
        </div>        
   
        <div class="cola">  
            <div class="cola1">
                <h6>Sintomas: </h6>                  
                <div class="sintomas-mascota">
                    <h3>${datos.sintomas}</h3>
                </div>        
            </div>
            <div class="cola2">
                <button class="btn-custom-1" onclick="editar(${index})" data-bs-dismiss="modal">Editar</button>
                <button class="btn-custom-2" onclick="terminar(${index})" >Terminar</button>
                <button class="btn-custom-3" onclick="anular(${index})">Anular</button>
            </div>
        </div>     
              
            `;

                rowDiv.appendChild(col1);
                rowDiv.appendChild(col2);

                modalBody.appendChild(rowDiv);
            }

            else if (datosFiltrados.length > 0 && 'terminadas' === estadoSeleccionado) {

                var rowDiv = document.createElement('div');
                rowDiv.className = 'col mt-3 acavan';


                var col1 = document.createElement('div');
                col1.className = 'col';
                col1.innerHTML = `
                 <img src=" ${datos.tipo === 'Perro' ? 'perro.jpg' : 
        datos.tipo === 'Gato' ? 'gato.jpg' : 
        datos.tipo === 'Pez' ? 'pez.png' : 
        datos.tipo === 'Caballo' ? 'Caballo.jpg' :
        datos.tipo === 'Conejo' ? 'Conejo.jpg' : 
        datos.tipo === 'Pato' ? 'Pato.jpg' : 
        datos.tipo === 'Gallina' ? 'Gallina.jpg' : 'default.jpg'
    }" class="img-fluid rounded-start" alt="${datos.tipo}">
                <h2>Nombre: </h2>
                <div class="nombre-mascota"><h3>${datos.nombre}</h3></div>
                <h2>Tipo: </h2>
                <div class="tipo-mascota"><h3>${datos.tipo}</h3></div>
               
            `;

                var col2 = document.createElement('div');
                col2.className = 'col mt-1';
                col2.innerHTML = `
    
            <div class="cabeza">
            
                <div class="cabeza1">
                    <h4>Propietario: </h4>
                    <div class="propietario-mascota">
                        <h3>${datos.propietario}</h3>
                    </div>
                    <h4>Fecha: </h4>
                    <div class="fecha-mascota">
                        <h3>${datos.fecha}</h3>
                    </div>
                </div>
                <div class="cabeza2">
                    <h4>Telefono: </h4>
                    <div class="telefono-mascota">
                        <h3>${datos.telefono}</h3>
                    </div>
                    <h4>Hora: </h4>
                    <div class="hora-mascota">
                        <h3>${datos.hora}</h3>
                    </div>
                </div>
            </div>        
       
            <div class="cola">  
                <div class="cola1">
                    <h6>Sintomas: </h6>                  
                    <div class="sintomas-mascota">
                        <h3>${datos.sintomas}</h3>
                    </div>        
                </div>
                <div class="cola2">
                    <button class="btn-custom-1" onclick="editar(${index})" data-bs-dismiss="modal">Editar</button>
                    <button class="btn-custom-4" onclick="abierta(${index})" >Abiertas</button>
                    <button class="btn-custom-3" onclick="anular(${index})">Anular</button>
                </div>
            </div>     
                  
                `;

                rowDiv.appendChild(col1);
                rowDiv.appendChild(col2);

                modalBody.appendChild(rowDiv);
            }

            else if (datosFiltrados.length > 0 && 'anuladas' === estadoSeleccionado) {

                var rowDiv = document.createElement('div');
                rowDiv.className = 'col mt-3 acavan';



                var col1 = document.createElement('div');
                col1.className = 'col';
                col1.innerHTML = `
                    <img src=" ${datos.tipo === 'Perro' ? 'perro.jpg' : 
        datos.tipo === 'Gato' ? 'gato.jpg' : 
        datos.tipo === 'Pez' ? 'pez.png' : 
        datos.tipo === 'Caballo' ? 'Caballo.jpg' :
        datos.tipo === 'Conejo' ? 'Conejo.jpg' : 
        datos.tipo === 'Pato' ? 'Pato.jpg' : 
        datos.tipo === 'Gallina' ? 'Gallina.jpg' : 'default.jpg'
    }" class="img-fluid rounded-start" alt="${datos.tipo}">
                    <h2>Nombre: </h2>
                    <div class="nombre-mascota"><h3>${datos.nombre}</h3></div>
                    <h2>Tipo: </h2>
                    <div class="tipo-mascota"><h3>${datos.tipo}</h3></div>
                   
                `;

                var col2 = document.createElement('div');
                col2.className = 'col mt-1';
                col2.innerHTML = `
        
                <div class="cabeza">
                
                    <div class="cabeza1">
                        <h4>Propietario: </h4>
                        <div class="propietario-mascota">
                            <h3>${datos.propietario}</h3>
                        </div>
                        <h4>Fecha: </h4>
                        <div class="fecha-mascota">
                            <h3>${datos.fecha}</h3>
                        </div>
                    </div>
                    <div class="cabeza2">
                        <h4>Telefono: </h4>
                        <div class="telefono-mascota">
                            <h3>${datos.telefono}</h3>
                        </div>
                        <h4>Hora: </h4>
                        <div class="hora-mascota">
                            <h3>${datos.hora}</h3>
                        </div>
                    </div>
                </div>        
           
                <div class="cola">  
                    <div class="cola1">
                        <h6>Sintomas: </h6>                  
                        <div class="sintomas-mascota">
                            <h3>${datos.sintomas}</h3>
                        </div>        
                    </div>
                    <div class="cola2">
                        <button class="btn-custom-1" onclick="editar(${index})" data-bs-dismiss="modal">Editar</button>
                        <button class="btn-custom-4" onclick="abierta(${index})" >Abiertas</button>
                        <button class="btn-custom-2" onclick="terminar(${index})" >Terminar</button>
                    </div>
                </div>     
                      
                    `;

                rowDiv.appendChild(col1);
                rowDiv.appendChild(col2);

                modalBody.appendChild(rowDiv);
            }
        }
    });

}


function terminar(index) {
    const registro = data[index];
    registro.estado = 'terminadas';
    mostrarAcavanExtendidoModal();
}
function abierta(index) {
    const registro = data[index];
    registro.estado = 'abiertas';
    mostrarAcavanExtendidoModal();
}
function anular(index) {
    const registro = data[index];
    registro.estado = 'anuladas';
    mostrarAcavanExtendidoModal();
}


function editar(index) {
    bd = true;
    id = index;
    const registro = data[id];

    document.getElementById("nombre").value = registro.nombre;
    document.getElementById("tipo").value = registro.tipo;
    document.getElementById("propietario").value = registro.propietario;
    document.getElementById("fecha").value = registro.fecha;
    document.getElementById("telefono").value = registro.telefono;
    document.getElementById("hora").value = registro.hora;
    document.querySelector('.enfermo').value = registro.sintomas;

    document.getElementById("animal-image").src = registro.tipo === 'Perro' ? 'perro.jpg' : 
    registro.tipo === 'Gato' ? 'gato.jpg' : 
    registro.tipo === 'Pez' ? 'pez.png' : 
    registro.tipo === 'Caballo' ? 'Caballo.jpg' :
    registro.tipo === 'Conejo' ? 'Conejo.jpg' : 
    registro.tipo === 'Pato' ? 'Pato.jpg' : 
    registro.tipo === 'Gallina' ? 'Gallina.jpg' : 'default.jpg'


    est = registro.estado;


    new bootstrap.Modal(document.getElementById('exampleModal')).show();
}
