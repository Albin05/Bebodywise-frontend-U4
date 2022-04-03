function submit(){
    var input = document.querySelector("#input").value;
// getting the data from form
    if(input===""){
        document.getElementById("res").textContent="Please Enter Mobile Number";
    }else if(input.length>10 || input.length<10){
        document.getElementById("res").textContent="Please Enter Valid Number";
    }else{
        Login(); 
    }
}


let Login=async ()=>{
    try {
        let login_data={
            
            mobile:document.getElementById("input").value,  
            password:document.getElementById("password").value, 
        }
        let login_jsondata=JSON.stringify(login_data);
        let logres=await fetch("https://bebodywise-api-backend.herokuapp.com/login",{
        method:'POST',
        body:login_jsondata,
        headers:{
            "Content-Type": "application/json",
            }
        });
        let data=await logres.json();
       if(data.message=="Mobile No. not Registered "){
           alert("Please signup")
           window.location.href="signup.html"
       }
       if(data.message=="Wrong Password"){
           alert("Incorrect Password")
       }
       if(data.token){
           localStorage.setItem("User_token", JSON.stringify(data.token));
           window.location.href = "index.html"
       }
    } catch (error) {
        console.log("err",error.message);
    }
}
