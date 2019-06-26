function Tree(size,leaf) {
    this.size = size ||10;
    this.leaf = leaf ||{spring:'green',summer:"green",fall:"orange",winter:null};
    this.leafColor;
};



Tree.prototype.changeSeason = function (season) {
    this.leafColor = this.leaf[season]
    if(season==='spring'){
        this.size +=1
    }
};


function Malp(syrup,size,leaf) {
    Tree.call(this,size,leaf);
    this.syrup = syrup ||15
}

Malp.prototype = Object.create(Tree);
Malp.constructor = Malp;

Malp.prototype.changeSeason = function (season) {
    Tree.prototype.changeSeason.call(this,season);
    if(this.syrup ==='spring'){
        this.syrup +=1
    }
};

const malp = new Malp(15,5);

malp.changeSeason('spring');

console.log(malp.leafColor)