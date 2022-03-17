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


    let mensaje = 'Se realizan los siguientes procesos: se procede a validación el día de hoy '
    mensaje += "<strong>" + fechaInicio + "</strong>"
    mensaje += ' siendo las '
    mensaje += "<strong>" + horaIncio + "</strong>"
    // Desarrollo de la actividad
    mensaje += '. Se realiza el proceso de verificación del equipo, '
    mensaje += '<strong>' + mensajePendiente + '</strong>'
    mensaje += ' se procede a contactar al usuario para poder hacer el cierre del caso, en el cual, el usuario informa que no se encuentra en sitio, y hasta que él verifique el equipo no autoriza el cierre, nos indica el usuario que vuelve a tener disponibilidad el día'
    mensaje += ' <strong>' + fechaFinal + '</strong>, '
    mensaje += ' a las '
    // HORA FINAL
    mensaje += '<strong>' + horaFinal + '</strong>, '
    mensaje += 'para generar su respectiva verificación. Por lo tanto, el caso queda en <strong>pendiente.</strong>'

    console.log(mensaje)
    document.getElementById("mensajeFinalPendiente").innerHTML = mensaje

}