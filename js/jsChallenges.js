document.querySelector("#subscribe").addEventListener("click", function(){
    console.log ("this works")

    if(this.checked){
        document.querySelector("#emailDiv").style.display = "block";
    }
    else{
        document.querySelector("#emailDiv").style.display = "none";
    }
});

document.addEventListener("click", function(){
    alert(new Date());
});