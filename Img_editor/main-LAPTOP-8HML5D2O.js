let fileImg = document.querySelector(".file-img")
let imgChoose = document.querySelector(".choose-img")
let filterName = document.querySelector(".filter-info .name")
let filterOption = document.querySelectorAll(".filters button")
let displayImg = document.querySelector(".priveiw-image img")
let filterslider = document.querySelector(".slider input")
let filtervalue = document.querySelector(".filter-info .value")
let filterReset=document.querySelector(".final-action .reset")
let brightness = 100, saturation = 100, grayscale = 0, inversion = 0
const applyfilter=()=>
{
    displayImg.style.filter=`brightness(${brightness}%) invert(${inversion}%) grayscale(${grayscale}%) saturate(${saturation}%)`
} 
let selectedImg = () => {
    let Img = fileImg.files[0]
    displayImg.src = URL.createObjectURL(Img)
}
fileImg.addEventListener('change', selectedImg)
imgChoose.addEventListener("click", () => fileImg.click())
filterOption.forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector(".filters .active").classList.remove("active")
        option.classList.add("active")
        filterName.innerHTML = option.innerHTML
        if (option.id === "Brightness") {
            filterslider.max = '200'
            filterslider.value = brightness
            filtervalue.innerHTML = `${brightness}%`
        }
        else if (option.id === "Saturation") {
            filterslider.max = '200'
            filterslider.value = saturation
            filtervalue.innerHTML = `${saturation}%`
        }
        else if (option.id === "Inversion") {
            filterslider.max = '100'
            filterslider.value = inversion
            filtervalue.innerHTML = `${inversion}%`
        }
        else {
            filterslider.max = '100'
            filterslider.value = grayscale
            filtervalue.innerHTML = `${grayscale}%`
        }
    })
})
const silderValue = () => {
    filtervalue.innerHTML = filterslider.value + "%"
    const selectedfilter = document.querySelector(".filters .active")
    if (selectedfilter.id === "Brightness") {
        brightness = filterslider.value
    }
    else if (selectedfilter.id === "Saturation") {
        saturation = filterslider.value
    }
    else if (selectedfilter.id === "Inversion") {
        inversion = filterslider.value
    }
    else {
        grayscale = filterslider.value
    }
    applyfilter()
}
filterslider.addEventListener('input', silderValue)
filterReset.addEventListener('click',resetFun)
resetFun=()=>{
    displayImg.style="none"
    
}