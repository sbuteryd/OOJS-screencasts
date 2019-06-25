function Tree(size,leaf) {
    this.size = size ||10;
    this.leaf = leaf||{spring:'green',summer:'green',fall:'orange',winter:null};
    this.leafColor;
}


Tree.prototype.changeSeason = function (season) {
    this.leafColor = this.leaf[season];
    if(season ==='spring'){
        this.size +=1
    }
};



function Maple(syrup,size,leaf) {
    Tree.call(this,size,leaf);
    this.syrup = syrup
}

Maple.prototype = Object.create(Tree.prototype);
Maple.constructor = Maple;

Maple.prototype.changeSeason = function (season) {
    Tree.prototype.changeSeason.call(this,season)
    if(season ==='spring'){
        this.syrup +=1
    }
};


Maple.prototype.getSyruo = function () {
    this.syrup -=3
};


const maple = new Maple();


maple.changeSeason('spring');

console.log(maple.leafColor)


