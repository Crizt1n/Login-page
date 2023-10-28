class Landing{

    //properties

    dataBase={
       "milan":{username:"milan",password:"1234"},
        "manu":{username:"manu",password:"1234"},
        "siva":{username:"siva",password:"1234"},
        "priya":{username:"priya",password:"1234"}
    }

    //method
    //to store data permanently

    saveData(){
        if (this.dataBase){
            localStorage.setItem("database",JSON.stringify(this.dataBase))
            console.log(this.dataBase);
        }
    }

    //to get data from database 

    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))
    }

    //to register new user

   register(){
    this.getData()
    let user = reguser.value
    let pswd =regpswd.value
  
   if(user=="" || pswd==""){
    alert('please enter a valid input')
   }

   else{

    if(user in this.dataBase){
        alert('user already exists')
        reguser.value=""
        regpswd.value=""
    }

    else{
        this.dataBase[user]={username:user,password:pswd}
        console.log(this.dataBase);
        this.saveData()
        alert('Registration Successfull')
        
        //for navigating to another webpage 
        window.location.href="login.html"
    }

   }

   }

   //login
   login(){
    let user1=loguser.value
    console.log(user1);
    let pswd1=logpswd.value
    console.log(pswd1);

    this.getData()  
    if(user1 in this.dataBase){
        if(this.dataBase[user1].password==pswd1){
            localStorage.setItem("user",user1)
            alert('Login Successfull')
            //navigate
            window.location='home.html '
        }
        else{
            alert('user doesnot exist') 
        }
        
    }
    else{
        alert('Invalid Username and Password')
    }
   }
}

const obj = new Landing()
obj. getData()