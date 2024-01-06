const genform=document.querySelector(".promptgen")
const imggallery=document.querySelector(".img-section")
const OPENAI_API_KEY="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"
const updateimgcard=(imgarray)=>{
    imgarray.forEach((imgobj,index) => {
        const imgcard=imggallery.querySelectorAll(".img-card")[index]
        const imgele=imgcard.querySelector("img")
        const aigenr=`data:image/jpeg;base64,${imgobj.b64_json}`
        imgele.src=aigenr
        imgele.onload=()=>{
            imgcard.classList.remove("loading")
        }
    });
}
const aigen=async(userprompt,imgquantity)=>{try{
    const response=await fetch("https://api.openai.com/v1/images/generations",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body:JSON.stringify({
            prompt:userprompt,
            n:parseInt(imgquantity),
            size:"512x512",
            response_format:"b64_json"
        })
    })
    if(!response.ok) throw new Error("Failed to generate the image")
    const { data }=await response.json()
    updateimgcard([...data])
}catch(error){
    alert(error)
}
}
const handleFormSubmission=(e)=>{
    e.preventDefault()
    const userprompt=e.srcElement[0].value
    const imgquantity=e.srcElement[1].value
    const gallery=Array.from({length: imgquantity},()=>
    `<div class="img-card">
    <img src="loading.gif" alt="">
    <a href="#" class="download-btn">
        <img src="dicon.png" alt="">
    </a>
</div>`).join("")
imggallery.innerHTML=gallery
}
genform.addEventListener('submit',handleFormSubmission)