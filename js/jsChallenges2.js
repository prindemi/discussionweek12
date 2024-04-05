let bill = document.querySelector('#bill')

let home = document.querySelector('#home')

document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log ("this works")

    if(this.checked){
        home.value = bill.value;
        home.disabled=true;
    }
    else{
        home.value = "";
        home.disabled=false;
    }
})