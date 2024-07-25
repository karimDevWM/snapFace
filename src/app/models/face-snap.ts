export class FaceSnap {
  // raccourci pour la déclaration et initialisation des attributs de classe et qui produit
  // les mêmes résultats que l'encienne methode :
    // title: string;
    // constructor(title: string){
        // this.title = title
    // }

    constructor(
        public title: string,
        public description : string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number
    ) {}
    
      addSnap() {
        this.snaps++;
      }

      removeSnap() {
        this.snaps--;
      }
}
