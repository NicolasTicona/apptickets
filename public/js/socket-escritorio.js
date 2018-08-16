let socket = io()


let searchParams = new URLSearchParams(window.location.search)

if(!searchParams.has('escritorio')){
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}

let escritorio = searchParams.get('escritorio')
console.log(escritorio)

$('h1').text('Escritorio '+ escritorio)

let small = $('small')

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(res) {
    
        if(res === 'No hay tickets'){
            alert(res)
            return
        }

        small.text('Ticket '+res.numero)
    })
    
})