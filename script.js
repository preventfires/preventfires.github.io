// Add active class to the current button (highlight it)
function setActiveRegion(element) {
    var parent = element.parentElement;
    var current = parent.getElementsByClassName("active");
    current.item(0).classList.remove("active");
    element.className.baseVal = "active";
    setActiveDisplay()
}

function setActiveMonth(element) {
    var parent = element.parentElement;
    var current = parent.getElementsByClassName("activeMonth");
    current.item(0).classList.remove("activeMonth");
    element.className += " activeMonth";
    setActiveDisplay()
}

function setActiveLevel(element) {
    var parent = element.parentElement;
    var current = parent.getElementsByClassName("activeLevel");
    current.item(0).classList.remove("activeLevel");
    element.className += " activeLevel";
    setActiveDisplay()
}

function setActiveDisplay() {
    var region = document.getElementsByClassName("active")[0].id;
    var month = document.getElementsByClassName("temporalcell activeMonth")[0].id;
    var level = document.getElementsByClassName("activeLevel")[0].id;
    var current = document.getElementsByClassName("tabcontent activeTab");
    current.item(0).classList.remove("activeTab");
    var newCurrent = document.getElementById(region+month+level)
    newCurrent.className += " activeTab"
    console.log(region, month, level)
}