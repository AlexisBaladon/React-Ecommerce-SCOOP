class Helado {
  id: number;
  imagen: string;
  nombre: string;
  cantStock: number;
  descuento: number;

  constructor(id: number, imagen: string, nombre: string, cantStock: number, descuento: number = 0) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.cantStock = cantStock;
    this.descuento = descuento;
  }
}

export default Helado;