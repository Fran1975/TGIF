let longitud = data.results[0].members.length


  for (let i = 0;  i < longitud; i=i+1) 
  { 
    let nuMembers = 1+i
    let firstName = data.results[0].members[i].first_name
    let middleName = data.results[0].members[i].middle_name
    let lastName = data.results[0].members[i].last_name
    let party = data.results[0].members[i].party
    let votes = data.results[0].members[i].votesmart_id
      
    if (middleName == null && votes == null) {      
      document.getElementById("houseTable").innerHTML+= "<tr><td>"+nuMembers+"</td><td>"+firstName+"</td><td>"+"-----"+"</td><td>"
    +lastName+"</td><td>"+party+"</td><td>"+"-----"+"</td></tr>";      
       }

    else if (middleName == null ) {      
      document.getElementById("houseTable").innerHTML+= "<tr><td>"+nuMembers+"</td><td>"+firstName+"</td><td>"+"-----"+"</td><td>"
    +lastName+"</td><td>"+party+"</td><td>"+votes+"</td></tr>";      
       }
    
    else if (votes == null) {
      document.getElementById("houseTable").innerHTML+= "<tr><td>"+nuMembers+"</td><td>"+firstName+"</td><td>"+middleName+"</td><td>"
    +lastName+"</td><td>"+party+"</td><td>"+"-----"+"</td></tr>";
     } else{ 
  
    document.getElementById("houseTable").innerHTML+= "<tr><td>"+nuMembers+"</td><td>"+firstName+"</td><td>"+middleName+"</td><td>"
    +lastName+"</td><td>"+party+"</td><td>"+votes+"</td></tr>"; 
     } 
  
  
  }

    