let exam = true

$("a#themE").on("click", function () {
    if (exam === true) {
        $("header").addClass("lightTheme")
        exam = false
    }
    else {

        $("header").removeClass("lightTheme")
        exam = true
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




let html = ""
let xml = ""
let firstvercarousel = document.querySelector("div.swiper-wrapper")
function fetchDataCaro() {
    xml = new XMLHttpRequest()
    xml.open("get", "http://localhost:3000/verticalcarouselF")
    xml.responseType = "json"
    xml.onload = () => {
        xml.response.forEach((elem) => {
            html +=
                `
        <div class="swiper-slide"><img src=${elem.imgSrc} alt=""></div>

        `
            firstvercarousel.innerHTML = html

        })
    }
    xml.onerror = () => {
        alert("There is aproblem")
    }

    xml.send(null)
}
fetchDataCaro()

let secondvercarousel = document.querySelector("div.swiper-wrapperS")
function fetchSecondCarouseldata() {
    let html = ""

    fetch("http://localhost:3000/verticalcarouselS")
        .then((dataSwi) => dataSwi.json())
        .then((res) => {
            res.forEach((elen) => {
                html +=
                    `
                 <div class="swiper-slide"><img src=${elen.imagesrc} alt=""></div>

                `

            })
            secondvercarousel.innerHTML = html
        })

}
fetchSecondCarouseldata()