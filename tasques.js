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



class Critica extends Tasca {

    constructor(id, nom, prioritat, dataLimit, descripcio){
        super(id, nom, prioritat, "critica");                                 
        this.dataLimit = dataLimit;
        this.descripcio = descripcio;
    }

    getDataLimit(){
        return this.dataLimit;
    }

    setdataLimit(newData){
        this.dataLimit = newData;
    }

    mostrarInfoTasca() {
        return `${super.mostrarInfoTasca()},
                Data límit: ${this.dataLimit},
                Descripció: ${this.descripcio}`;
    }
}


class Urgent extends Tasca {

    constructor(id, nom, prioritat, recordatori) {
        super(id, nom, prioritat, "Urgent");
        this.recordatori = recordatori;
    }

    mostrarInfoTasca() {
        return `${super.mostrarInfoTasca()},
        Recordatori: ${this.recordatori}`;
    }
}




class App {

    constructor() {
        this.tasques = [];
    }


    afegirTasca(tasca) {
        this.tasques.push(tasca);
    }

    completarTasca(id) {
        const tasca = this.tasques.find(t => t.id === id);
        if (tasca) tasca.setCompletar();
    }

    eliminarTasca(id) {
        this.tasques = this.tasques.filter(t => t.id !== id);
    }

    modificarTasca(id, nouNom) {
        const tasca = this.tasques.find(t => t.id === id);
        if (tasca) tasca.nom = nouNom;
    }

    actualizarLlista() {
        this.tasques.forEach(t => console.log(t.mostrarInfoTasca()));
    }

    mostrarTotalTasques() {
        console.log(`Total de tasques: ${this.tasques.length}`);
    }
}



// Test de funcionalitat
document.addEventListener("DOMContentLoaded", () => {
    const app = new App();

    app.actualizarLlista();
    app.mostrarTotalTasques();

    //Afegint 5 tasques
    app.afegirTasca(new Tasca(1, "Fer deures", 2, "Normal"));
    app.afegirTasca(new Tasca(2, "Ordenar habitacio", 1, "Normal"));
    app.afegirTasca(new Urgent(3, "Enviar un correu", 2, "Recordatori: A les 16h"));
    app.afegirTasca(new Urgent(4, "Fer la compra", 2, "Recordatori: A les 10h"));
    app.afegirTasca(new Critica(5, "Anar al metge", 1, "2025-02-16", "Important"));

    app.actualizarLlista();
    app.mostrarTotalTasques();

    //Modificant Tasca
    app.modificarTasca(3, "Trucar a la mare");

    //Completar dues de les tasques
    app.completarTasca(1);
    app.completarTasca(5);

    //Afegir 1 tasca nova
    app.afegirTasca(new Tasca(6, "Cuinar", 2, "Normal"));

    app.actualizarLlista();
    app.mostrarTotalTasques();

    //Eliminar dues tasques
    app.eliminarTasca(1);
    app.eliminarTasca(6);

    app.actualizarLlista();
    app.mostrarTotalTasques();
});
