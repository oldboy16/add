var elForm = document.querySelector(".form")
var elList = document.querySelector(".list")
var data = []
elForm.addEventListener("submit",function(e){
    e.preventDefault()
    var val = e.target.meva.value
    var joy = e.target.joy.value
    if(joy == "boshiga"){
        data.unshift(val)
    }else if(joy == "oxiriga"){
        data.push(val)
    }else{
        null
    }
    forData()
    e.target.meva.value
})
function forData(){
    elList.innerHTML = ""
    for(var i = 0; i < data.length; i++){
        var newLi = document.createElement("li")
        elList.appendChild(newLi)
        newLi.textContent = data[i]
    }
}