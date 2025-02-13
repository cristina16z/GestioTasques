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
