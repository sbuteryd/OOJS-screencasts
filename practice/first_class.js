class Plane {
    constructor(engine){
        this.engine = engine;
        this.engineActive =false
    }
    startEngine(){
        console.log('startEngine');
        this.engineActive =true;
    }
}



const plane = new Plane(1);

plane.startEngine()