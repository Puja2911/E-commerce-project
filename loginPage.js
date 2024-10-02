
function login(){

    const data = JSON.parse(localStorage.getItem('signup'));
    for(var i = 0;i<data.length;i++){
        let e = data[i].email;
        let p = data[i].password;
   
        if(e==myform.mail.value && p == myform.psw.value){
            return alert("LogIn Successful");
           
            break;
          
        }
        window.location.href="homePage.html"
       }
   
      return alert("Invalid Credential");
   }
   
        
