function Calculate(){

let randomNumber = Math.round(Math.random()*99)

if (playerName.value == "" || playerName.value == ""){
err.innerHTML = "All input filed are required" 
err.style.display = "block"
    setTimeout(() =>{
        err.style.display = "none"
    },5000
    )
}else if (randomNumber >= 70) {
    show.innerHTML = `
    <h1 class="display-6"> <b style="font-size:1em;">✔✔✔</b>
    <b>
    <p style="color:rgb(4, 254, 25);">You and ${loveName.value} match</p>
    <b style="font-size:1em;">${randomNumber}%</b>
    <p style="color:white;">You will not want to lose ${playerName.value}</p>
    </h1>
    `
    loveName.value == "";
    playerName.value == "";
}
}