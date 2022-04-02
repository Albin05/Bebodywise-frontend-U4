// document.querySelector("form").addEventListener("submit", next);
   
//     function next(event){
//         event.preventDefault();
       
        
        
//         Register();
//         // localStorage.setItem("database",JSON.stringify(user));
//         window.location.href = "index.html";
//     }

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
    Register()
    
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
            let res=await fetch("http://localhost:5000/register",{
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