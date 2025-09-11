
let btntheme = document.querySelector("a#themE")
btntheme.addEventListener("click", function () {
    document.querySelector("header").classList.toggle("lightTheme")
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

let secondvercarousel = document.querySelector("div.secondSwi>div.mySwiperVer>div.swiper-wrapper")
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



let jumpBtn = document.querySelector("a#jumpBtn")
$("a#jumpBtn").on("scroll", function () {
    let st = $(this).scrollTop()

    if (st > 1000) {
        jumpBtn.classList.remove("d-nonE")
        jumpBtn.classList.add("d-inlineBlick")
    }
    else {
        jumpBtn.classList.add("d-nonE")
        jumpBtn.classList.remove("d-inlineBlick")

    }
})