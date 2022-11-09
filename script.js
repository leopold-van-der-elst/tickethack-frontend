document.querySelector("#searchBtn").addEventListener("click",function(){
    const departure = document.querySelector("#departureInput").value
    const arrival = document.querySelector("#arrivalInput").value
    const date = document.querySelector("#dateInput").value
    fetch(`http://localhost:3000/trips`,{
     method: 'POST',
     headers: {
         "Content-Type":"application/json",
     },
     body: JSON.stringify({departure, arrival, date})
    }).then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.result.length; i++) {
            const hoursMinute = new Date(data.result[i].date)
            const hour = hoursMinute.getHours()
            const minutes = hoursMinute.getMinutes()
            document.querySelector("#container-right").innerHTML += `
            <div id="element-row">
                <p>${data.result[i].departure}</p>
                <p>${data.result[i].arrival}</p>
                <p>${hour} : ${minutes}</p>
                <p>${data.result[i].price}</p>  
                <button id='btn-booking'>BOOKING</button>
            </div>
            `;
        }
    })
 })
 