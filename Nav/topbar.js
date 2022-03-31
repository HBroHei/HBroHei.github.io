async function loadHTML(){
    let hFile = await fetch("/Nav/topbar.html")
    let htmlCode = await hFile.text()
    document.getElementById("topbar").innerHTML = htmlCode
}

loadHTML()
