class McAlegre{
    #l1;
    constructor(carne, queijo){
        this.carne = carne;
        this.queijo = queijo;
        this.x = 0;
        this.y = 0;
        this.z = 0;


    }
}
class BigLanche{
    #l2;
    constructor(carne, carne2, queijo,alface, molho , cebola, picles ){
        this.carne = carne;
        this.carne2 = carne2;
        this.queijo = queijo;
        this.alface = alface;
        this.molho =  molho;
        this.cebola = cebola;
        this.picles = picles;
        this.x = 0;
        this.y = 0;
        this.z = 0;

    }
}

class McHen{
    #l3
    constructor(frango, queijo,alface, picles ){
        this.frango = frango;
        this.queijo = queijo;
        this.alface = alface;
        this.picles = picles;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}

acompanhamento(refri, batatam, batatap){
    if (typeof(refri) !== "string"){
        console.error("insera apenas strings x, y ou z"){
        if(refri === "x"){
            this.x = this.x + batatam;
        }
        else if(refri === "y"){
            this.y = this.y + batatap;
        }
        else{
            console.error("Insira apenas x, y ou z");
            return;
        }
    }

}
}

const combo = new McAlegre("refri", "batatam");
combo.acompanhamento("x","y");
