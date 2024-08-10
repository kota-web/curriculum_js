let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num) {  
    if (num % 2 === 0) {  
        console.log(num + 'は偶数です');
    }
}

for (let i = 0; i < numbers.length; i++) {
    isEven(numbers[i]);
}



class Car{
    
    constructor(name,number){
        this.name = name;
        this.number = number;

    }

    getNumGas(){
            console.log("ガソリンは" + this.name + "です。ナンバーは" +  this.number + "です。");
    }
}

let Cars = new Car('ハイオク',1234);
Cars.getNumGas();