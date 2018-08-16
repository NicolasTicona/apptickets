
var socket = io()

var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Usuario nuevo');
})

socket.on('disconnect',  function(){
    console.log('Usuario desconectado');
})

socket.on('estadoActual', function (data, callback){
    label.text(data.actual)
})

$('button').on('click', function() {

    socket.emit('siguienteTicket',null, function(siguienteTicket) {
        label.text(siguienteTicket)
    })
})