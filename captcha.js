var totalEntries = 0;
function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
    var i;
    for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
     }
   var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
   totalEntries++;
   //check and update count
   ValidCaptcha();
   
document.getElementById("mainCaptcha").innerHTML = code;
   document.getElementById("txtInput").value = '';
   document.getElementById("total").innerHTML = totalEntries;
 }


 function AutoCallCaptcha(){
    totalEntries = 0;
    countdown();
     setInterval(Captcha, 15000);
     document.getElementById("autorefresh").style.backgroundColor = "red";
     document.getElementById("autorefresh").disabled= true;  
     document.getElementById("autorefresh").value= 'Started';  
 }



 var validcount =0;
 var invalidcount =0;
function ValidCaptcha(){
     var string1 = removeSpaces(document.getElementById('mainCaptcha').innerHTML);
     var string2 = removeSpaces(document.getElementById('txtInput').value);

     if(string2) {
      if (string1 == string2 ){
        validcount ++;
        document.getElementById("check").innerHTML = 'CORRECT';
        document.getElementById("check").style.backgroundColor = 'green';
        document.getElementById("validcount").innerHTML = validcount;
       return true;
     }
     else{        
        invalidcount++;
        document.getElementById("check").innerHTML = 'WRONG';
        document.getElementById("check").style.backgroundColor = 'red';
        document.getElementById("invalidcount").innerHTML = invalidcount;
       return false;
     }
     }

     
 }

 function removeSpaces(string){
   return string.split(' ').join('');
 }
// -------------------------



 //set minutes 
 var mins = 30; 
  
 //calculate the seconds 
 var secs = mins * 60; 

 //countdown function is evoked when page is loaded 
 function countdown() { 
     setTimeout('Decrement()', 60); 
 } 

 //Decrement function decrement the value. 
 function Decrement() { 
     if (document.getElementById) { 
         minutes = document.getElementById("minutes"); 
         seconds = document.getElementById("seconds"); 

         //if less than a minute remaining 
         //Display only seconds value. 
         if (seconds < 59) { 
             seconds.innerHTML = secs; 
         } 

         //Display both minutes and seconds 
         //getminutes and getseconds is used to 
         //get minutes and seconds 
         else { 
             minutes.innerHTML = getminutes(); 
             seconds.innerHTML = getseconds(); 
         } 
         //when less than a minute remaining 
         //colour of the minutes and seconds 
         //changes to red 
         if (mins < 1) { 
             minutes.style.color = "red"; 
             seconds.style.color = "red"; 
         } 
         //if seconds becomes zero, 
         //then page alert time up 
         if (mins < 0) { 
             alert('time up'); 
             minutes.innerHTML = 0; 
             seconds.innerHTML = 0; 
         } 
         //if seconds > 0 then seconds is decremented 
         else { 
             secs--; 
             setTimeout('Decrement()', 1000); 
         } 
     } 
 } 

 function reset() {
  minutes.innerHTML = 0; 
  seconds.innerHTML = 0; 
  totalEntries = 0;
  document.getElementById("validcount").innerHTML = 0;
  document.getElementById("invalidcount").innerHTML = 0;
  document.getElementById("total").innerHTML = 0;
  document.getElementById("check").innerHTML = 'Validation Not started';
  document.getElementById("check").style.backgroundColor = 'grey';
 }

 function getminutes() { 
     //minutes is seconds divided by 60, rounded down 
     mins = Math.floor(secs / 60); 
     return mins; 
 } 

 function getseconds() { 
     //take minutes remaining (as seconds) away  
     //from total seconds remaining 
     return secs - Math.round(mins * 60); 
 } 

 