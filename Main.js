let flag = true

$("a#themE").on("click", function () {
    if (flag === true) {
        $("header").addClass("lightTheme")
        flag = false
    }
    else {

        $("header").removeClass("lightTheme")
        flag = true
    }
})

let btNext = document.querySelector("button#btNext")
let firstAdv = document.querySelector("h1#firstAdv")
let secondAdv = document.querySelector("h1#secondAdv")
let btnSecond = document.querySelector("button#btnSecond")
btNext.addEventListener("click", function () {
    firstAdv.classList.add("d-nonE")
    secondAdv.classList.remove("d-nonE")

})

btnSecond.addEventListener("click", function () {
    firstAdv.classList.remove("d-nonE")
    secondAdv.classList.add("d-nonE")
})