class Tree  {
    constructor(size=10,leafs={spring:'green',summer:'green',fall:'orange',winter:null}){
        this.size = size
        this.leafs = leafs
        this.leafColor;
    }

    changeLeafColor(season){
        this.leafColor = this.leafs[season];
        if(season ==='spring'){
            this.size +=1
        }
    }
}

const tree = new Tree();

tree.changeLeafColor('spring');

class Malps extends Tree{
    constructor(syrup,size,leaf){
        super(size,leaf);
        this.syrup = syrup
    }
    MalpChange(season){
        super.changeLeafColor(season);
        if(season==='spring'){
            this.syrup +=1
        }

    }

}

const malps = new Malps();

malps.MalpChange('spring');

console.log(malps.leafColor)

