class Tree {
    constructor(size=10,leaf={spring:'green',summer:'green',fall:'orange',winter:null}){
        this.size =size;
        this.leaf = leaf;
        this.leafColor;
    }

    changeLeafColor(season){
        if(season ==='spring'){
            this.size +=1
        }
        this.leafColor = this.leaf[season]
    }
}


class Malp extends Tree{
    constructor(syrup,size,leaf){
        super(size,leaf);
        this.syrup = syrup
    }
    changeLeafColor(season){
        super.changeLeafColor(season);
        if(season ==='spring'){
            this.syrup +=1
        }
    }
}

const malp = new Malp()

malp.changeLeafColor('spring');

console.log(malp.leafColor)