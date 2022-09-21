

//POO

//Clases

class Coche {

    //Constructor & propiedades...
    constructor(marca,color,year,combustible,ocupantes){
        this.marca = marca,
        this.color = color,
        this.year = year, 
        this.combustible = combustible,
        this.ocupantes = ocupantes,
        this.ruedas = 5;
        this.motor = "combustion";
        this.retrovisores = 3;
        this.metrosRecorridos = 0;
        this.velocidad = 0;
    }


    //Metodo...

    acelerar(pisada){
        this.velocidad += pisada;
    }

    frenar(){
        this.velocidad -= 10;
    }

    aparcar(){
        this.velocidad = 0;
    }

};

//Instanciar

let coche1 = new Coche("Porsche","Negro mate",2022,"electrico",6);
let coche2 = new Coche("BMW","Gris oscuro",2022,"Gasolina",5);
let coche3 = new Coche("Toyota","Blanco",2000,"Gasolina",5);


console.log(coche1);
console.log(coche2);
console.log(coche3);

coche1.acelerar(10);

console.log(coche1);
console.log(coche2);
console.log(coche3);

