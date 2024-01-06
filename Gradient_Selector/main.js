let inColor=document.querySelectorAll(".colors input")
let gboxcol=document.querySelector(".gradient-box")
let direction=document.querySelector(".select select")
let tarea=document.querySelector("#row")
let ref=document.querySelector("#refresh")
let copycol=document.querySelector("#copy")
let applybg=document.querySelector("#apply")

let gradientcol=()=>{
    let box=`linear-gradient( ${direction.value},${inColor[1].value},${inColor[0].value})`
    gboxcol.style.background=box
    tarea.innerHTML=`background:linear-gradient( ${direction.value},${inColor[1].value},${inColor[0].value})`
}
inColor.forEach(input =>{
    input.addEventListener("input",gradientcol
)})
direction.addEventListener('change',gradientcol)
 function random() 
{
    let codecol='#'+Math.floor(Math.random()*16777215).toString(16)
    return codecol
}
ref.addEventListener('click',()=>
{ 
    let a=random()
    let b=random()
    gboxcol.style.background=`linear-gradient( ${direction.value},${a},${b})`
    tarea.innerHTML=`background:linear-gradient( ${direction.value},${a},${b})`
    inColor[1].value=a
    inColor[0].value=b
    copycol.innerHTML='Copy'
    applybg.innerHTML="Apply"
})
copycol.addEventListener('click',()=>{
    let cope=`linear-gradient( ${direction.value},${inColor[1].value},${inColor[0].value})`
    navigator.clipboard.write=""
    copycol.innerHTML="Code copied"
})
applybg.addEventListener('click',()=>{
    document.body.style.background=`linear-gradient( ${direction.value},${inColor[1].value},${inColor[0].value})`
    applybg.innerHTML="Applied"
})
// done