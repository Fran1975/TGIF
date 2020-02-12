function firstScreen(array) {


for (let i = 0;  i < array.length; i++) 
  { 
    let firstName = array[i].first_name
    let middleName = array[i].middle_name
    let lastName = array[i].last_name
    let name = lastName+","+firstName
    let name2= lastName+" "+middleName+","+firstName
    let url = data.results[0].members[i].url
    let urlname = '<a href="' + url + '"target="_blank">' + name + '</a>';
    let urlname2 = '<a href="' + url + '"target="_blank">' + name2 + '</a>';
    let state = array[i].state
    let party = array[i].party
    let votes = array[i].votes_with_party_pct

        if (middleName == null) {      
        document.getElementById("senateTable").innerHTML+= "<tr><td>"+urlname+"</td><td>"+party+"</td><td>"+state+
        "</td><td>"+votes+"%"+"</td></tr>";      
        } else {   
        document.getElementById("senateTable").innerHTML+= "<tr><td>"+urlname2+"</td><td>"
        +party+"</td><td>"+state+"</td><td>"+votes+"%"+"</td></tr>";
        }
    }
  }


  firstScreen(data.results[0].members) 

// Button Up

$(document).ready(function(){ 
  irArriba();
});

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}    

// Order


function clickParty() {
  let partys = []
  let partyState =[] 
    

  document.getElementById("senateTable").innerHTML = ""

  let checkbox1 = document.getElementById("customCheck1") 
  let checkbox2 = document.getElementById("customCheck2")
  let checkbox3 = document.getElementById("customCheck3")

  let lista = document.getElementById("states");
  let listaState = lista.options[lista.selectedIndex].value; 

  for (let i = 0;  i < data.results[0].members.length; i++) 
  { 
    
    let party = data.results[0].members[i].party
        
    
    if (checkbox1.checked && party == "R") { 
      partys.push (data.results[0].members[i])      
    }
    
    if (checkbox2.checked && party == "D") {   
      partys.push (data.results[0].members[i])
    }

    if (checkbox3.checked && party == "I") {     
      partys.push (data.results[0].members[i])
    }       
  } 
  firstScreen(partys) 
  document.getElementById("senateTable").innerHTML = ""
  
  if (listaState == "ALL"){ firstScreen(partys)
  } 

  for (let i = 0;  i <  data.results[0].members.length; i++) {  
      let states = partys[i].state  
        if (states == listaState){
        partyState.push (data.results[0].members[i])
        }  
     }
     firstScreen(partyState)
}
  
 
 



    