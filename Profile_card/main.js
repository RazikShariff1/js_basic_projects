const strg = ['Java Developer', 'App Developer ', 'Web Developer ', 'Graphic Designer ']
let worddisplay = document.querySelector(".data span")
let wordindex = 0
let charindex = 0
let isdel = false
let tt = false
let imgArray=["male001.png","male002.png","male003.png","male004.png"]
let writer = () => {
    const word = strg[wordindex]
    const char = word.substring(0, charindex)
    worddisplay.textContent = char
    if (!isdel && charindex < word.length) {
        charindex++
        setTimeout(writer, 100);
    }
    else if (isdel && charindex > 0) {
        charindex--
        setTimeout(writer, 100);
    }
    else {
        isdel = !isdel
        col(!tt)
        wordindex = !isdel ? (wordindex + 1) % strg.length : wordindex
setTimeout(writer ,1000)
    }

}
let imageSwitcher = () => {
    let imG = document.querySelector(".photo img").remove()
    let newImg=document.querySelector(".photo").appendChild=`<img src="male001.png">`
}

writer()
col()
imageSwitcher()

function col(a) {
    if (a) {
        let colr = "#" + Math.floor(Math.random() * 16777215).toString(16)
        document.querySelector(".photo .bg").style.background = `${colr}`
        worddisplay.style.color = `${colr}`
        col()
        }
}
