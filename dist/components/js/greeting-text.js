var today=new Date,currHr=today.getHours(),greetingTxt="";greetingTxt=currHr<12?"Good Morning!!":currHr<18?"Good Afternoon!!":"Good Evening!!",document.getElementById("greeting").innerText=greetingTxt;