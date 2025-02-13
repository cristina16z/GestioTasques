class Tasca{

    static totalTasques = 0;
    constructor(id, nom, completada, prioritat, tipus, totalTasques){
        this.id = id;
        this.nom = nom;
        this.completada = false;
        this.prioritat = prioritat;
        this.tipus = tipus;
        Tasca.totalTasques++;
    }


    getNom(){
        return this.nom;
    }

    setNom(value){
        this.nom = value;
    }


    setCompletar(){
        this.completada = true;                             
    }

    estaCompletada(){
        return this.completada;
    }


    mostrarInfoTasca(){
        return `Nom: ${this.nom},
                Tipus: ${this.tipus},
                Prioritat: ${this.prioritat},
                Completada: ${this.completada}`;
    }

    static obtenirTotalTasques(){
        return Tasca.totalTasques;
    }
}