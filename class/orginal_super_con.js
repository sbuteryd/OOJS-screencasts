function Tree(size, leaves) {
    this.size = size || 10;
    this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
        this.size += 1;
    }
}

function Maple (syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = syrupQty || 15;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
        this.syrupQty += 1;
    }
}

Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
