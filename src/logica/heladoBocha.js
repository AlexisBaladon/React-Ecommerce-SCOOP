import Helado from './helado.js'

class HeladoBocha extends Helado {
    constructor(id, imagen, nombre, enStock, tipoSabor) {
      super(id,imagen,nombre,enStock);
      this.tipoSabor = tipoSabor;
    }
}

export default HeladoBocha;