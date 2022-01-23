import Helado from './helado.js'

class HeladoPaleta extends Helado {
    constructor(id, imagen, nombre, enStock, sabor) {
      super(id,imagen,nombre,enStock);
      this.sabor = sabor;
    }
}

export default HeladoPaleta;