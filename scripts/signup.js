
document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
    let pass = document.getElementById("password").value;
    if(pass.length < 8 ){
        alert("Password must have 8 characters")
    }else{
        Register()
    }
    
    
})


    async function Register() {
     
        try {
            let register_data={
            firstName:document.getElementById("first").value,
            lastName:document.getElementById("last").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            mobile:document.getElementById("input").value,
         
            }
            register_data=JSON.stringify(register_data);
            let res=await fetch("https://bebodywise-api-backend.herokuapp.com/register",{
            method:'POST',
            body:register_data,
            headers:{
                "Content-Type": "application/json",
                }
            });
            let data=await res.json();
            console.log(data)
            if(data.message=="Mobile No. already exists"){
                alert("Please use another phone number")
            }
            else if(data.token){
                window.location.href = "login.html"
            }
            
        } 
        catch (error) {
          console.log("err: ",error);
        }
    }