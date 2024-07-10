// Question 1 : You are creating a website for your college. Create a class User with 2 properties
// name & email. It also has a method called viewData() that allows user to view data.
let DATA = "secret information";

class User{
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data =",DATA);
    }
};

let student1 = new User("Deepak","deepak@gmail.com");
let student2 = new User("Singh","singh@gmail.com");


let Teacher1 = new User("Rudhra","rudhra@gmail.com");





// Question 2: Create a new class Admin which inherits from User. Add a new method called editData
// to admin that allows it to edit website data. 

class Admin extends User{

    constructor(name,email){
        super(name,email);
    }
    
    editData(){
        DATA = "Some New Value";
    }
}


let admin1 = new Admin("admin","admin@gmail.com");

