const socket = io();
/**
 * io hace referencia a "socket.io", se llama así por convención
 * Instanciamos el socket y lo guardamos en una constante "socket"
 * Dicho socket es el que utilizaremos para poder comunicarnos con el SOCKET del servidor
 * (Nosotros en este archivo, somos como "clientes", porque representamos una vista)
 */

socket.emit('message', "¡Hola, me estoy comunicando desde un websocket!");

socket.on('evento_para_socket_individual', data => {
    console.log(data);
});

socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log(data);
});

socket.on('evento_para_todos', data => {
    console.log(data);
});

const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');
const messageContainer = document.getElementById('messageContainer');

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('newMessage', message);
    messageInput.value = '';
})

socket.on('loadMessages', (messages)  => {
    /** Cargar los mensajes en mi interfaz web */
    messages.forEach( (message ) => {
        cargarMensaje(message);
    })
})

socket.on('newMessage', (message)  => {
    /** Cargar mensaje nuevo */
    cargarMensaje(message);
})

function cargarMensaje(message){
    const messageElement = document.createElement('p');
    messageElement.textContent = `${message.socketid} : ${message.message}`;
    messageContainer.appendChild(messageElement);
}