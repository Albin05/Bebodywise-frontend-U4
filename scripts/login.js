function submit(){
    var input = document.querySelector("#input").value;

    if(input===""){
        document.getElementById("res").textContent="Please Enter Mobile Number";
    }else if(input.length>10 || input.length<10){
        document.getElementById("res").textContent="Please Enter Valid Number";
    }else{
        Login();
        // window.location.href="otp.html"
    }
}


let Login=async ()=>{
    try {
        let login_data={
            
            mobile:document.getElementById("input").value,  
            password:document.getElementById("password").value, 
        }
        console.log(login_data)
        let login_jsondata=JSON.stringify(login_data);
        let logres=await fetch("http://localhost:5000/login",{
        method:'POST',
        body:login_jsondata,
        headers:{
            "Content-Type": "application/json",
            }
        });
        let data=await logres.json();
        console.log(data.message)
       if(data.message=="Mobile No. not Registered "){
           alert("Please signup")
           window.location.href="signup.html"
       }
       if(data.message=="Wrong Password"){
           alert("Incorrect Password")
       }
        // console.log(login_data.mobile,data.token)
        // getData(login_data.mobile,data.token);
    } catch (error) {
        console.log("err",error.message);
    }
}
