// AJAX

let data;
let url=""

if (window.location.href.indexOf ("houseloyalty") > 0){ 
  url = "https://api.propublica.org/congress/v1/113/house/members.json" 
} else {  
  url = "https://api.propublica.org/congress/v1/113/senate/members.json"
}

fetch (url, {
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
    erase ()
    loyaltyGlance ()
    loyaltyPercentage ()

     }) .catch(function (error) {     
      console.log("Request failed: " + error.message);
   });

   function erase() {
    document.getElementById("myP").style.visibility = "hidden";
  }

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
// Tabla 1 

function loyaltyGlance () { 
    
  let sumRep=0
  let sumDem=0
  let sumInd=0
  let sumVoteR=0
  let sumVoteD=0
  let sumVoteI=0


  for (let i = 0;  i < data.results[0].members.length; i=i+1) 
  { 
    let party = data.results[0].members[i].party
    let votes = data.results[0].members[i].votes_with_party_pct
    let missedVote = data.results[0].members[i].missed_votes
    totMissedVote = (missedVote*100)/votes
    
    if (party == "R") { 
        sumRep=sumRep+1
        sumVoteR=sumVoteR+votes
    }
    if (party == "D") {
        sumDem=sumDem+1
        sumVoteD=sumVoteD+votes
    }

    if (party == "I") {
        sumInd=sumInd+1
        sumVoteI=sumVoteI+votes
    }
  }

  totsumVoteR= sumVoteR/sumRep
  totsumVoteD= sumVoteD/sumDem
  totsumVoteI= sumVoteI/sumInd
  totalSum=sumDem+sumRep
  totsumVote=(totsumVoteR+totsumVoteD+totsumVoteI)/3
  totsumVote2=(totsumVoteR+totsumVoteD)/2

  document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"Democrats"+"</td><td>"
    +sumDem+"</td><td>"+totsumVoteD.toFixed(2)+"</td></tr>"; 
  document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"Republicans"+"</td><td>"
    +sumRep+"</td><td>"+totsumVoteR.toFixed(2)+"</td></tr>"; 


  if (sumInd <=1){ 
  document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"TOTAL"+"</td><td>"+totalSum+"</td><td>"+totsumVote2.toFixed(2)+"</td></tr>";
 }   else {
    document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"Independents"+"</td><td>"
    +sumInd+"</td><td>"+totsumVoteI.toFixed(2)+"</td></tr>"; 
    document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"TOTAL"+"</td><td>"+totalSum+"</td><td>"+totsumVote.toFixed(2)+"</td></tr>";
 }
}

// Tablas 2 y 3 

function loyaltyPercentage () { 

  let votesPartyPct = data.results[0].members

  longitud = votesPartyPct.length

  percentage = (longitud *10)/100



  votesPartyPct.sort (function (a,b){return (a.votes_with_party_pct - b.votes_with_party_pct)})

  for(let i = 0; i < percentage; i++){

    let firstName = data.results[0].members[i].first_name
    let lastName = data.results[0].members[i].last_name
    let totalVotes = data.results[0].members[i].total_votes
    let VotesParty = data.results[0].members[i].votes_with_party_pct
    let numberPartyVote = (totalVotes * VotesParty) / 100
    
    document.getElementById("Tableloyaltytop").innerHTML+= "<tr><td>"+lastName+","+firstName+"</td><td>"
    +numberPartyVote.toFixed(0)+"</td><td>"+VotesParty+"</td></tr>"; 
  }

  votesPartyPct.sort (function (a,b){return (b.votes_with_party_pct - a.votes_with_party_pct)})

  for(let i = 0; i < percentage; i++){

    let firstName = data.results[0].members[i].first_name
    let lastName = data.results[0].members[i].last_name
    let totalVotes = data.results[0].members[i].total_votes
    let VotesParty = data.results[0].members[i].votes_with_party_pct
    let numberPartyVote = (totalVotes * VotesParty) / 100

    document.getElementById("Tableloyaltybottom").innerHTML+= "<tr><td>"+lastName+","+firstName+"</td><td>"
    +numberPartyVote.toFixed(0)+"</td><td>"+VotesParty+"</td></tr>"; 
  }
}
 
 
 

 

