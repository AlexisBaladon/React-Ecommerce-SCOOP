class Flavor {
  id: number;
  title: string;
  pictureUrl: string;
  constructor(id: number, title: string, pictureUrl: string) {
    this.id = id;
    this.title = title;
    this.pictureUrl = pictureUrl;
  }
}

export default Flavor;