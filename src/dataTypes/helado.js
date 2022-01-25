class Helado {
  constructor(id, imagen, nombre, tipo, enStock, descuento = 0) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.tipo = tipo;
    this.enStock = enStock;
    this.descuento = descuento;
  }
}

export default Helado;