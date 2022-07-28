


let isAnagram = function(){
    let s1 = document.getElementById("stringValue1").value
    let s2 = document.getElementById("stringValue2").value
    let outputValue = document.getElementById("output")
    let letters = /^[A-Za-z]+$/

    let s1Sorted = s1.toLowerCase().split("").sort().join("")
    let s2Sorted = s2.toLowerCase().split("").sort().join("")
    if(s1.match(letters) && s2.match(letters)) {
        if(s1.length === 0 || s2.length === 0  ){
            return outputValue.innerHTML = "Please input text"
        }
        else if(s1.length !== s2.length){
            return  outputValue.innerHTML = "false"
        }
        else if(s1 === s2){
            return outputValue.innerHTML = "true"
        }

        else if(s1Sorted === s2Sorted) {
            return outputValue.innerHTML = "true"
        }
        else {
            return outputValue.innerHTML = "false"
        }
    }
    else{
        return outputValue.innerHTML = "Please input letters only"
    }

};