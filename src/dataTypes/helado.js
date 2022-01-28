class Helado {
  constructor(id, imagen, nombre, cantStock, descuento = 0) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.cantStock = cantStock;
    this.descuento = descuento;
  }
}

export default Helado;