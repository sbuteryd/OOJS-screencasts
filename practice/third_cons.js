function Tree(size,leaf) {
    this.size = size ||10;
    this.leaf = leaf ||{spring:'green',summer:'green',fall:'orange',winter:null};
    this.leavColor;
}


Tree.prototype.changeLeafColor = function (season) {
    this.leafColor = this.leaf[season];
    if(season ==='spring'){
        this.size +=1
    }
};


function Maple(syrupQty,size,leaf) {
    Tree.call(this,size,leaf);
    this.syrupQty = syrupQty ||15
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeLeafColor = function (season) {
    Tree.prototype.changeLeafColor.call(this,season)
    if(season ==='spring'){
        this.syrupQty+=1
    }
};

Maple.prototype.syrupQty = function () {
    this.syrupQty -= 3
};

const myMaple = new Maple(15, 5);
myMaple.changeLeafColor('spring');

console.log(myMaple.leafColor)

