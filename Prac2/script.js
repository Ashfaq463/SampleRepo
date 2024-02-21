function saveData() {
    let name , email , password;
    name = document.getElementById("Name").value;
    email = document.getElementById("Email").value;
    password = document.getElementById("Password").value;
    console.log(name+email+password);

    // localStorage.setItem("name" , name);
    // locatStorage.setItem("Email" , email);
    // localStorage.setItem("Password" , password);

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=> {
        return v.email == email;
    }))  {
        alert("User already exists");
    }
    else {
        user_records.push ({
            "name":name ,
            "Email":email , 
            "Password":password
        })

        localStorage.setItem("users" , JSON.stringify(user_records));
    }
}