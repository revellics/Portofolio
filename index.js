let cambridge_btn = document.getElementById("cambridge-btn")
let js_btn = document.getElementById("js-btn")
let css_btn = document.getElementById("css-btn")
let html_btn = document.getElementById("html-btn")
let cPlus_btn = document.getElementById("bs-btn")
let c_btn = document.getElementById("c-btn")

window.onload = function () {
    cambridge_btn.addEventListener("click", function () { window.open('https://www.cambridgeenglish.org/', '_blank'); })
    js_btn.addEventListener("click", function () { window.open('https://web.dev/javascript?hl=it', '_blank'); })
    css_btn.addEventListener("click", function () { window.open('https://web.dev/css?hl=it', '_blank'); })
    html_btn.addEventListener("click", function () { window.open('https://www.w3schools.com/Html/', '_blank'); })
    cPlus_btn.addEventListener("click", function () { window.open('https://cplusplus.com/', '_blank'); })
    c_btn.addEventListener("click", function () { window.open('https://dotnet.microsoft.com/it-it/languages/csharp', '_blank'); })
}

