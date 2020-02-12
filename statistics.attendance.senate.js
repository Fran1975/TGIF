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
// Tabla 1 attendance

    
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
 } else {
    document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"Independents"+"</td><td>"
    +sumInd+"</td><td>"+totsumVoteI.toFixed(2)+"</td></tr>"; 
    document.getElementById("statisticsTable").innerHTML+= "<tr><td>"+"TOTAL"+"</td><td>"+totalSum+"</td><td>"+totsumVote.toFixed(2)+"</td></tr>";
 }


// Tabla 2 y 3 attendance


let missedVotepct = data.results[0].members

longitud = missedVotepct.length

percentage = (longitud *10)/100



missedVotepct.sort (function (a,b){return (a.missed_votes_pct - b.missed_votes_pct)})

for(let i = 0; i < percentage; i++){

    let firstName = data.results[0].members[i].first_name
    let lastName = data.results[0].members[i].last_name
    let missedVote = data.results[0].members[i].missed_votes
    let missedVoteP = data.results[0].members[i].missed_votes_pct

    document.getElementById("Tabletop").innerHTML+= "<tr><td>"+lastName+","+firstName+"</td><td>"
    +missedVote+"</td><td>"+missedVoteP+"</td></tr>"; 
}

missedVotepct.sort (function (a,b){return (b.missed_votes_pct - a.missed_votes_pct)})

for(let i = 0; i < percentage; i++){

    let firstName = data.results[0].members[i].first_name
    let lastName = data.results[0].members[i].last_name
    let missedVote = data.results[0].members[i].missed_votes
    let missedVoteP = data.results[0].members[i].missed_votes_pct

    document.getElementById("Tablebottom").innerHTML+= "<tr><td>"+lastName+","+firstName+"</td><td>"
    +missedVote+"</td><td>"+missedVoteP+"</td></tr>"; 
}

 
 
 

 

