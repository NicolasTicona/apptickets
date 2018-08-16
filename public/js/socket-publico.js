let socket = io()

let ticket1 = $('#lblTicket1')
let ticket2 = $('#lblTicket2')
let ticket3 = $('#lblTicket3')
let ticket4 = $('#lblTicket4')

let escritorio1 = $('#lblEscritorio1')
let escritorio2 = $('#lblEscritorio2')
let escritorio3 = $('#lblEscritorio3')
let escritorio4 = $('#lblEscritorio4')

let lblTickets = [ticket1,ticket2,ticket3,ticket4]

let lblEscritorios = [escritorio1,escritorio2,escritorio3,escritorio4]

socket.on('estadoActual', function(data, callback) {
    ActualizaHTML(data.ultimosCuatro)
})

socket.on('ultimosCuatro', function(data, callback) {
    let audio = new Audio('audio/new-ticket.mp3')
    audio.play()
    ActualizaHTML(data.ultimosCuatro)
})

function ActualizaHTML(ultimosCuatro) {

    for(let i = 0; i < ultimosCuatro.length; i++){
        lblTickets[i].text('Ticket '+ ultimosCuatro[i].numero)
        lblEscritorios[i].text('Escritorio '+ ultimosCuatro[i].escritorio)
    }
}