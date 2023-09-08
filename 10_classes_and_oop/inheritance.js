class User{
    constructor(username){
        this.username = username;
        
    }
    logMe(){
        console.log(this.username);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
       
    }
    addCourse(){
        console.log("course added");
        console.log(this.username);
    }
}


const chai = new Teacher("chai", "chai@gmail.com", "123");
chai.logMe();  

const masalaChai = new User("MasalaChai")
masalaChai.logMe();

console.log(chai instanceof User);