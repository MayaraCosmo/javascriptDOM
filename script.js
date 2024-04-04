let corpo = document.querySelector("body")

let titulo = document.createElement("h1")
let paragrafo = document.createElement ("p")
let imagem = document.createElement("img")

imagem.setAttribute("src","./download.jpg")

titulo.innerHTML = "Mayara"
paragrafo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi non recusandae perspiciatis repudiandae hic natus consectetur vero adipisci tenetur iure omnis laborum soluta, eius nihil, nostrum doloribus! Perferendis, ut!"

corpo.appendChild(titulo)

corpo.appendChild(paragrafo)

corpo.appendChild(imagem)


/* function changeColor () {
if (paragrafo.className === "paragrafo") {
    paragrafo.classList.remove("paragrafo")
} else {
paragrafo.classList.add("paragrafo")
}
}*/

function darkMode () {
    if (corpo.className === "body" && paragrafo.className === "paragrafo" && titulo.className === "titulo") {
        corpo.classList.remove ("body")
        paragrafo.classList.remove ("paragrafo")
        titulo.classList.remove ("titulo")
    } else {
 corpo.classList.add ("body")
 paragrafo.classList.add ("paragrafo")
 titulo.classList.add ("titulo")

}

}