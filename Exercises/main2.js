// Ordenas los nombres
let classComp=["Daniela","Harris","Gonzalo","Fran"];
let copia = [...classComp]; //clonamos y ya modifiamos esta 

copia.sort();
console.log("Copia")
console.log (copia);
console.log("classComp")
console.log (classComp);


// Imprimir el primero nombre y el ultimo, y todos los nombres

let i=0
let text="";
for (i = 0; i < classComp.length; i++) {
    text += classComp[i];
  }
console.log (classComp);
console.log (classComp [0]);
console.log (classComp [3]);

// Imprimir edades
let ageComp=[34,23,25,44]
while (i < 4) {
    text +=  + i;
    i++;
  }
console.log (ageComp);

/// numero menor
let mayor=[25,35,48,2]
let max = Math.min.apply (Math, mayor);
console.log (max); 

/// numero mayor
let menor=[23,31,43,2]
let min = Math.max.apply (Math, menor);
console.log (min); 

///funcion sin parametros
let a=5;
let b=7;
multNumbers();

function multNumbers (){ 
  var mult=a*b; 
  console.log(mult);
}

///funcion con parametros
let c=5;
let d=7;
//function multNumbers (num1,num2){ var multi=num1*num2; console.log(multi);}

