class Tree {
    constructor(size=10,leaf={spring:'green',summber:'green',fall:'orange',winter:null}){
        this.size = size;
        this.leaf= leaf;
        this.leafColor;
    }
    changeLeaf(season){
        this.leafColor = this.leaf[season];
        if(season ==='spring'){
            this.size +=1
        }
    }
}

class Maple extends Tree{
    constructor(syrup,size,leaf){
        super(size,leaf);
        this.syrup = syrup
    }
    other(season) {
        super.changeLeaf(season);
        if(season==='spring'){
            this.syrup +=1
        }
    }
}

const maple= new Maple(1);



