alert("Hello User!! We are not storing your pesonal information..😊")
const birthDate = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#number-input");
const outputAnswer=document.querySelector("#output-text");

checkButton.addEventListener("click", function eventHandler() {

    const dob=birthDate.value;
const sum=sumDob(dob);

if(sum&&luckyNumber.value){
if(sum%luckyNumber.value===0){
    outputAnswer.innerText="Your Birthday is lucky. 🎉";
} else{
    outputAnswer.innerText="Your Birthday is not lucky.";
}
} else{
    outputAnswer.innerText="Fill both the fields!";
}

});

function sumDob(dob) {
   dob=dob.replaceAll("-","");
    var sum=0;
    for(var i=0;i<dob.length;i++) {
        
        sum=sum+parseInt(dob.charAt(i));
       
        
    }
    return sum;
}
/* or if we parseInt and replaceAll inside eventHandler

function sumDob(dob) {
   
    var sum=0;
   while(dob>0) {
       sum=sum+(dob%10);
       dob=Math.floor(dob/10);

   }
    return sum;
}*/
