const form = document.getElementById("registraion-form");

form.addEventListener("click", function(event){
    const fullname = document.getElementById("FullName").value.trim();
    const email = document.getElementById("EmailId").value.trim();
    const mobile = document.getElementById("Mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document.getElementById("confirmpassword").value.trim();

    let isvalid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("mobileError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmpasswordError").textContent = "";

    document.getElementById("successmessage").textContent = "";

    //fullname
    const nameRegex = /^[A-Za-z]{3,50}$/;
    if(fullname === "") {
        document.getElementById("nameError").textContent = "Full name is required";
        isvalid = false;
    } 
    else if(!nameRegex.test(fullname)) {
        document.getElementById("nameError").textContent = "Enter a valid full name";
        isvalid = false;
    }

    //email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        document.getElementById("emailError").textContent = "email is required";
        isvalid = false;
    }
    else if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent = "Enter a valid email";
        isvalid = false;
    }

    //mobile number
    const mobileRegex = /^[6-9]\d{9}$/
    if(mobile === ""){
        document.getElementById("mobileError").textContent = "Mobile number required"
        isvalid = false;
    }
    else if(!mobileRegex.test(mobile)){
        document.getElementById("mobileError").textContent = "Enter valid mobile number"
        isvalid =  false;
    }
    
    //password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(password === ""){
        document.getElementById("passwordError").textContent = "password is required"
        isvalid = false;
    }
    else if(!passwordRegex.test(password)){
        document.getElementById("passwordError").textContent = "Enter a valid password"
        isvalid = false;
    }


})