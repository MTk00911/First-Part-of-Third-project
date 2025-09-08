$("a#themE").on("click", function () {
    let flag = true
    if (flag === true) {
        $("header").addClass("lightTheme")
        flag = false
    }
    else {

        $("header").removeClass("lightTheme")
        flag = true
    }
})