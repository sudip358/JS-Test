class User{
    constructor(username){
        this.username = username;
        
    }
    logMe(){
        console.log(this.username);
    }

    createID(){
        return `123`
    }
}
 
const hitesh = new User("hitesh");
hitesh.logMe(hitesh.createID());
