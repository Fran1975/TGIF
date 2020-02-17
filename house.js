// AJAX

let data;

fetch ("https://api.propublica.org/congress/v1/113/house/members.json", {
  method:"GET",
  headers: {
    'X-API-key':'GLwqLRmwzLSou1ExQwR19nODpYtTxtHZI5pGaON6'
  }
  }).then (function (response){ 
    if (response.ok) { 
      return response.json();
    }  
   }) .then(function (json){     
    data = json;    
    console.log (data)
    tablePrincipal(data.results[0].members)
    cargar_states()
    erase ()

     }) .catch(function (error) {     
      console.log("Request failed: " + error.message);
   });

   function erase() {
    document.getElementById("myP").style.visibility = "hidden";
  }


function tablePrincipal(array) {
  document.getElementById("houseTable").innerHTML = ""

  for (let i = 0; i < array.length; i++) {
    let firstName = array[i].first_name
    let middleName = array[i].middle_name
    let lastName = array[i].last_name
    let name = lastName + "," + firstName
    let name2 = lastName + " " + middleName + "," + firstName
    let url = data.results[0].members[i].url
    let urlname = '<a href="' + url + '"target="_blank">' + name + '</a>';
    let urlname2 = '<a href="' + url + '"target="_blank">' + name2 + '</a>';
    let state = array[i].state
    let party = array[i].party
    let votes = array[i].votes_with_party_pct

    if (middleName == null) {
      document.getElementById("houseTable").innerHTML += "<tr><td>" + urlname + "</td><td>" + party + "</td><td>" + state +
        "</td><td>" + votes + "%" + "</td></tr>";
    } else {
      document.getElementById("houseTable").innerHTML += "<tr><td>" + urlname2 + "</td><td>" +
        party + "</td><td>" + state + "</td><td>" + votes + "%" + "</td></tr>";
    }
  }
}


// Button Up

$(document).ready(function () {
  irArriba();
});

function irArriba() {
  $('.ir-arriba').click(function () {
    $('body,html').animate({
      scrollTop: '0px'
    }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.ir-arriba').slideDown(600);
    } else {
      $('.ir-arriba').slideUp(600);
    }
  });
  $('.ir-abajo').click(function () {
    $('body,html').animate({
      scrollTop: '1000px'
    }, 1000);
  });
}

// Order


function clickParty() {
  let partys = []
  let partyState = []




  let checkbox1 = document.getElementById("customCheck1")
  let checkbox2 = document.getElementById("customCheck2")
  let checkbox3 = document.getElementById("customCheck3")

  let lista = document.getElementById("states");
  let listaState = lista.options[lista.selectedIndex].value;

  for (let i = 0; i < data.results[0].members.length; i++) {

    let party = data.results[0].members[i].party


    if (checkbox1.checked && party == "R") {
      partys.push(data.results[0].members[i])
    }

    if (checkbox2.checked && party == "D") {
      partys.push(data.results[0].members[i])
    }

    if (checkbox3.checked && party == "I") {
      partys.push(data.results[0].members[i])
    }
  }
  tablePrincipal(partys)


  if (listaState == "ALL") {
    tablePrincipal(partys)
  } else {

    for (let i = 0; i < partys.length; i++) {
      let states = partys[i].state
      if (states == listaState) {
        partyState.push(partys[i])
      }
    }
    tablePrincipal(partyState)
  }
}

// Take data from JSON
//Codigo a Ejecutar al Cargar la Pagina

// funcion para Cargar Provincias al campo <select>

function cargar_states() {
  let stateJson = []
  for (let i = 0; i < data.results[0].members.length; i++) {

    stateJson.push(data.results[0].members[i].state)
  }
  var uniqueJson = [];

  stateJson.forEach(function (str) {
    if (uniqueJson.indexOf(str) < 0) {
      uniqueJson.push(str)
    }
  });

  orderJson = uniqueJson.sort()

  addOptions("locality", orderJson);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array) {
  var select = document.getElementsByName(domElement)[0];

  for (value in orderJson) {
    var option = document.createElement("option");
    option.text = orderJson[value];
    select.add(option);
  }
}

   
   
  

    