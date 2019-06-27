function Tree(size,leaf) {
    this.size = size ||10;
    this.leaf = leaf||{spring:'green',summer:'green',fall:'orange',winter:null};
    this.leafColor;
}



Tree.prototype.UpdateSeason = function(season) {
    this.leafColor = this.leaf[season];
    if(season ==='spring'){
        this.size +=1
    }

};

function Malp(syrup,size,leaf) {
    Tree.call(this,size,leaf);
    this.syrup = 1;
}

Malp.prototype = Object.create(Tree);
Malp.constructor = Malp;


Malp.prototype.MalpUpdate = function (season) {
    Tree.prototype.UpdateSeason.call(this,season)

    if(season ==='spring'){
        this.syrup +=1
    }
};



const tree = new Tree()
// tree.UpdateSeason('fall');
// console.log(tree.leafColor)


const malp = new Malp();
//
malp.MalpUpdate('fall');
console.log(malp.leafColor)