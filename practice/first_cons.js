function Plane(numEngines) {
    this.numEngines = numEngines;
    this.engines = false
}

Plane.prototype.startEngines = function () {
    console.log('Staring Engines');
    this.engines = true
};



const first = new Plane(1);

const second = new Plane(2);


first.startEngines();
second.startEngines()