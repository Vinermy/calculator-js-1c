const n0 = document.getElementById("n0")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")
const n7 = document.getElementById("n7")
const n8 = document.getElementById("n8")
const n9 = document.getElementById("n9")
const mul = document.getElementById("mul")
const div = document.getElementById("div")
const pls = document.getElementById("pls")
const min = document.getElementById("min")
const ac = document.getElementById("ac")
const eq = document.getElementById("eq")
const display = document.getElementById("display")

let leftside = 0
let sign = ""

function app0() {
    display.innerHTML += 0
}

function app1() {
    display.innerHTML += 1
}

function app2() {
    display.innerHTML += 2
}

function app3() {
    display.innerHTML += 3
}

function app4() {
    display.innerHTML += 4
}

function app5() {
    display.innerHTML += 5
}

function app6() {
    display.innerHTML += 6
}

function app7() {
    display.innerHTML += 7
}

function app8() {
    display.innerHTML += 8
}

function app9() {
    display.innerHTML += 9
}

function clear() {
    display.innerHTML = ""
}

function plus() {
    leftside = parseInt(display.innerHTML)
    clear()
    sign = "+"
}

function minus() {
    leftside = parseInt(display.innerHTML)
    clear()
    sign = "-"
}

function divide() {
    leftside = parseInt(display.innerHTML)
    clear()
    sign = "/"
}

function multiply() {
    leftside = parseInt(display.innerHTML)
    clear()
    sign = "*"
}

function solve() {
    if(sign == "+") {
        display.innerHTML = leftside + parseInt(display.innerHTML)
    }
    if(sign == "-") {
        display.innerHTML = leftside - parseInt(display.innerHTML)
    }
    if(sign == "*") {
        display.innerHTML = leftside * parseInt(display.innerHTML)
    }
    if(sign == "/") {
        display.innerHTML = leftside / parseInt(display.innerHTML)
    }
}

n0.addEventListener("click", app0)
n1.addEventListener("click", app1)
n2.addEventListener("click", app2)
n3.addEventListener("click", app3)
n4.addEventListener("click", app4)
n5.addEventListener("click", app5)
n6.addEventListener("click", app6)
n7.addEventListener("click", app7)
n8.addEventListener("click", app8)
n9.addEventListener("click", app9)

pls.addEventListener("click", plus)
min.addEventListener("click", minus)
mul.addEventListener("click", multiply)
div.addEventListener("click", divide)

ac.addEventListener("click", clear)
eq.addEventListener("click", solve)
