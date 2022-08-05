


let twoSum = function() {
    let hashMap = {},
        results = []
    let array = document.getElementById("numString").value
    let sum = document.getElementById("target").value

    for(let i =0; i < array.length; i++){
        if(hashMap[array[i]]){
            results.push(hashMap[array[i]], array[i])
        } else{
            hashMap[sum - array [i]] = array[i]
        }
    }
    if(results.join("") !== "") {
        return alert(results.join(","))
    } else {
        return alert("Please enter a valid number sequence or valid target number")
    }
};


