function Tree(size,leaf) {
    this.size = size||10;
    this.leaf = leaf|| {spring:'green',summer:'green',fall:'orange',winter:null};
    this.leafColor;
}



Tree.prototype.changeLeafColor = function (season) {
    this.leafColor = this.leaf[season]
    if(season ==='spring'){
        this.size +=1
    }
};

function Malp(syrup,size,leaf) {
    Tree.call(this,size,leaf);
    this.syrup = syrup;
}

Malp.prototype = Object.create(Tree.prototype);
Malp.constructor = Malp;


Malp.prototype.changeLeafColor = function (season) {
    Tree.prototype.changeLeafColor.call(this,season)
    if(this.syrup ==='spring'){
        this.syrup +=1
    }
};



const malp = new Malp();

malp.changeLeafColor('spring');

console.log(malp.leafColor)