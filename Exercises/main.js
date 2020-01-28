var myname="Fran";
var myage=44;
var ignasiAge=32;
var ageDiff=myage-ignasiAge;
var number=21;
var ignasiAge=30;
var classroom=["Fran","Carlos","Eva","Lucia","Mario","Elena"];
var ageclass=[44,25,58,15,35,27]
var i=0;
var text="";
var ejemploarray= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var myColor = ["Red", "Green", "White", "Black"];




document.getElementById("name").innerHTML = "My name is" + myname + myage;
document.getElementById("age").innerHTML = "the difference age is" + ageDiff;

if (myage>number){
    document.getElementById("age").innerHTML = "I´m older";
}else {
    document.getElementById("age").innerHTML = "I´m younger";
}

if (myage>ignasiAge){
    document.getElementById("age").innerHTML = "I´m older than Ignasi";
}else {
    document.getElementById("age").innerHTML = "I´m younger than Ignasi";
}

document.getElementById("classroom1").innerHTML = classroom[0];
document.getElementById("classroom1").innerHTML = classroom[5];
document.getElementById("classroom1").innerHTML = classroom;

// exercise 1

// Utilizacion de while
while (i < 6) {
    text += "<br>The age is " + i;
    i++;
  }
document.getElementById("ageclass1").innerHTML = ageclass;

// Imprimir el valor mas alto
document.getElementById("mayor").innerHTML = Math.max(0, 150, 30, 20, 8, 200);

//Imprimir el valor mas bajo
document.getElementById("menor").innerHTML = Math.min(0, 150, 30, 20, 8, 200);

//Imprimer el lugar de un elmento en un array
document.getElementById("lugar").innerHTML = ejemploarray[5];

//Unir elementos de un array a un string
document.getElementById("color").innerHTML=myColor.join(',"');

//Impresión de valores repetidos
function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}
console.log(find_duplicate_in_array([3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]));

// Poner el numero al reves
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

// Poner una palabra al reves
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Poner la primera letra de cada palabra en mayuscula
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("prince of persia"));

// Busca la palabra mas larga
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));