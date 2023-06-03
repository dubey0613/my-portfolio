let typingText= document.querySelector('.change-txt')
let Designation=['Frontend Developer','Java Developer','Cloud Enthusiast','Web Developer']


let arrayIndex= 0;

function changingtxt(){
    if(arrayIndex<Designation.length){
        typingText.innerHTML=Designation[arrayIndex]
        arrayIndex+=1
    }
    else{
        arrayIndex=0
        typingText.innerHTML=Designation[arrayIndex]
        arrayIndex+=1
    }
}
setInterval(changingtxt, 5000)
changingtxt()