function Calculate(){

    // let playerName = playerName.value
    // let loveName = loveName.value
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
    <div class="p-2">
    <h2><b style="font-size:1em;">✔✔👏</b>
    <b>
    <p style="color:rgb(4, 254, 25);">You and ${loveName.value} match</p>
    <b style="font-size:1em;color:rgb(4, 254, 25);">${randomNumber}%</b>
    <p style="color:rgb(4, 254, 25);">You will not want to lose ${playerName.value}</p>
    </h2>
    </div>
    </div>
    `
    loveName.value == "";
    playerName.value == "";
}else if (randomNumber >= 50) {
    show.innerHTML = `
    <div class="p-2">
    <h2> <b style="font-size:1em;">⁉⁉⁉</b>
    <b>
    <p style="color:blue;">You and ${loveName.value} match</p>
    <b style="font-size:1em;color:blue;">${randomNumber}%</b>
    <p style="color:blue;"> ${playerName.value}!! dey play oh 😁🙄</p>
    </h2>
    </div>
    `
    loveName.value == "";
    playerName.value == "";
}else if (randomNumber >= 35) {
    show.innerHTML = `
    <div class="p-2">
    <h2> <b style="font-size:1em;">😆😅😂</b>
    <b>
    <p style="color:yellow;">You and ${loveName.value} match</p>
    <b style="font-size:1em;color:yellow;">${randomNumber}%</b>
    <p style="color:yellow;"> ${playerName.value} don't trust ${loveName.value}🤣🤪</p>
    </h2>
    </div>
    `
    loveName.value == "";
    playerName.value == "";
}
else if (randomNumber >= 25) {
    show.innerHTML = `
    <div class="p-2">
    <h2> <b style="font-size:1em;">😆😅😂</b>
    <b>
    <p style="color:red;">You and ${loveName.value} match</p>
    <b style="font-size:1em;color:red;">${randomNumber}%</b>
    <p style="color:red;"> ${playerName.value} danger zone!!! 🥱🤣</p>
    </h2>
    </div>
    `
    loveName.value == "";
    playerName.value == "";
}
}








