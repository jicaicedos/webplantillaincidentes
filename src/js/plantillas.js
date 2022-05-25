/*
    Función que toma los datos de la plantilla y genera el mensaje
*/
function generarMensaje() {
    let mensaje = document.getElementById("texto1").innerHTML
    // Asunto del requerimiento
    mensaje += "<strong>" + document.getElementById("asunto").value + "</strong>, "
    mensaje += document.getElementById("texto2").innerHTML
    // Desarrollo de la actividad
    mensaje += "<strong>" + document.getElementById("mensaje").value + "</strong>"
    mensaje += document.getElementById("texto3").innerHTML + ";"
    // Nombre del consumidor del servicio
    mensaje += " <strong>" + document.getElementById("usuario").value + "</strong>"
    mensaje += document.getElementById("texto4").innerHTML

    document.getElementById("mensajeFinal").innerHTML = mensaje

}

function generarMensajePendiente() {

    let fechaInicio = document.getElementById("fechaInicio").value
    let horaIncio = document.getElementById("horaIncio").value
    let mensajePendiente = document.getElementById("mensajePendiente").value
    let fechaFinal = document.getElementById("fechaFinal").value
    let horaFinal = document.getElementById("horaFinal").value


    let mensaje = `Se realizan los siguientes procesos: se procede a validación el día de hoy 
                   <strong>${fechaInicio}</strong> siendo las <strong> ${horaIncio} </strong>`
    // Desarrollo de la actividad
    mensaje += `. Se realiza el proceso de verificación del equipo, <strong>${mensajePendiente}</strong>
                 se procede a contactar al usuario para poder hacer el cierre del caso, en el cual, el usuario informa que no se encuentra en sitio, y hasta que él verifique el equipo no autoriza el cierre, nos indica el usuario que vuelve a tener disponibilidad el día
                <strong>${fechaFinal}</strong>, a las <strong>${horaFinal} </strong>, para generar su respectiva verificación. Por lo tanto, el caso queda en <strong>pendiente.</strong>`

    document.getElementById("mensajeFinalPendiente").innerHTML = mensaje

}

// Función para generar el mensaje del ANS de avance el cuál debe quedar en modo privado
function generarMensajeAvance() {
    let textaAvance = document.getElementById("txtaAvance").value;

    let textaMsgAvance = `Se realizan los siguientes procesos: <strong> ${textaAvance} </strong>.`

    document.getElementById("msgFinalAvance").innerHTML = textaMsgAvance;
}

function generarMensajeEscalamiento() {
    let textaSolicitud = document.getElementById("textaSolicitud").value;
    let textaGestion = document.getElementById("txtaGestion").value;

    let textaMsgEscalamiento = `Cordial saludo, de acuerdo con la solicitud <strong>${textaSolicitud}</strong>
                                 se escala el caso para <strong>${textaGestion}</strong>.`;

    document.getElementById("msgFinalEscalamiento").innerHTML = textaMsgEscalamiento;
}

function generarMensajeSolucion() {
    let txtaSolicitudUsuario = document.getElementById("txtaSolicitudUsuario").value;
    let txtaProcesoRealizado = document.getElementById("txtaProcesoRealizado").value;
    let txtNombreUsuario = document.getElementById("txtNombreUsuario").value;

    let txtMsgSolucion = `Cordial saludo, para solucionar <strong>${txtaSolicitudUsuario}</strong> se realizó verificación de 
                        <strong>${txtaProcesoRealizado}</strong>. Se realizaron pruebas con el usuario, se ofreció asistencia adicional y se solicitó autorización para cierre del requerimiento.
                         El usuario <strong>${txtNombreUsuario}</strong> confirma la solución a satisfacción y autorizó el cierre del requerimiento.`;
    
    document.getElementById("msgFinalSolucion").innerHTML = txtMsgSolucion;
}

