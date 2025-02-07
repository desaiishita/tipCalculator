
let custTip = 0;

// two decimal place for total bill value

function twoDecimal (value){
    let mul = value * 100;
    let remDec = mul - (mul%1);
    return remDec/100;
}

function tipTotal (tip) {

    let custVal = document.getElementById("customTip").value * 1;
    
// for custom tip 
    let whichTip;
    if (custVal > 0) {
        whichTip = custVal;
    } else {
        whichTip = tip;
    }

    let billBef = document.getElementById("billVal").value * 1;
    let tipVal = (billBef * whichTip)/100;
    let billAft = billBef + tipVal;

    document.getElementById("totalVal").textContent = "Your total after the tip is $" + twoDecimal(billAft);

// make sure input and custom tip value is not negative
    if (billBef < 0 || custVal < 0) {
        document.getElementById("totalVal").textContent = "Make sure your bill and tip value is positive"; 
    }

}

//reset values 

function resetInput(){
    document.getElementById("billVal").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("totalVal").textContent = "";
  }

