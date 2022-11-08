document.querySelector("#searchBtn").addEventListener("click",()=>{
    const departure = document.querySelector("#departureInput").value
    const arrival = document.querySelector("#arrivalInput").value
    const date = document.querySelector("#dateInput").value
    fetch(`http://localhost:3000/trips`,{
     method : 'POST',
     headers : {
         "Content-Type":"application/json",
     },
     body: JSON.stringify({departure: departure, arrival: arrival, date: date})
     
    } )
   
 } )
 