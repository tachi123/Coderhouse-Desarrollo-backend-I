class TicketManager {
    #eventos = [];
    #precioBaseDeGanancia = 0.15;
    constructor() {
      // Inicializamos el arreglo de eventos
    }
    getEventos() {
      return this.#eventos;
    }
    agregarEvento({ nombre, lugar, precio, capacidad = 50, fecha = new Date() }) {
      const nuevoEvento = {
        id: this.#eventos.length + 1,
        nombre,
        lugar,
        precio: precio * (1 + this.#precioBaseDeGanancia),
        capacidad,
        fecha,
        participantes: [],
      };
      this.#eventos.push(nuevoEvento);
      return nuevoEvento;

    }

     agregarUsuario(idEvento, idUsuario) {
      const evento = this.#eventos.find(e => e.id === idEvento);
      if (!evento) {
        throw new Error('Evento no encontrado');
      }
      if (evento.participantes.includes(idUsuario)) {
        throw new Error('Usuario ya registrado');
      }
      evento.participantes.push(idUsuario);
    }

     ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
      const eventoOriginal = this.#eventos.find(e => e.id === idEvento);
      if (!eventoOriginal) {
        throw new Error('Evento no encontrado');
      }

       const nuevoEvento = {
        ...eventoOriginal, // Copiamos todas las propiedades del evento original
        id: this.#eventos.length + 1,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
      };

       this.#eventos.push(nuevoEvento);
    }

  }