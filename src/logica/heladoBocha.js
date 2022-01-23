import Helado from './helado.js'

class HeladoBocha extends Helado {
    constructor(id, imagen, nombre, enStock, sabores, ) {
      super(id,imagen,nombre,enStock);
      this.sabores = sabores;
    }
}

export default HeladoBocha;