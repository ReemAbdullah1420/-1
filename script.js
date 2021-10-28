const add = document.querySelectorAll(".btm2")
const Choice = document.querySelector(".choices")
add.forEach(button => {
    button.addEventListener("click", function () {
        const choose = button.parentElement.parentElement
        const imge = choose.querySelector("img").src
        const titel = choose.querySelector(".name-food").innerHTML
        const calo = choose.querySelector(".cal").innerHTML
        console.log(choose)
        const newChoice = ` <div>
        <div class="menu-1">
            <img src="${imge}" alt="">
        </div>
        <div class="menu-2">
            <h3>${titel} </h3>
            <span> ${calo}</span>
        </div>
    </div>
    <div>`

        Choice.innerHTML += newChoice
        Choice.scrollIntoView({ behavior: "smooth", block: "center" });

    })

})
