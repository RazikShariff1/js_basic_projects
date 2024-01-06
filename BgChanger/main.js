let theme=document.querySelectorAll('.button')
theme.forEach(color =>{
    color.addEventListener('click',()=>
    {
        let c=color.getAttribute('data-color')
        document.querySelector(':root').style.setProperty('--main-color',c)
    })
}) 