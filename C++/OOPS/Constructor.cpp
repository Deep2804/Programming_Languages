#include <iostream>
#include <string>
using namespace std;


// class Teacher{
// public: 
//     //properties/attributes
//     string name;
//     string subject;
//     string dept;
//     double salary;

//     //methods/member functions
//     void changeDept(string newDept){
//         dept = newDept;
//     }
// };

class Teacher{
private:
    double salary;

public: 
    string name;
    string subject;
    string dept;

    // non-parametrized
    // Teacher(){
    //   cout<<"Hi, I am Constructor"<<endl;
    //  dept ="Artificial Intelligence"; 
    // }

    // parametrized
    Teacher(string name, string dept, string subject, double salary){

        this->name = name;
        this->dept = dept;
        this->subject = subject;
        this->salary = salary;
    //   cout<<"Hi, I am Constructor"<<endl;
    //   dept ="Artificial Intelligence"; 
    }

   // copy constructor
   Teacher(Teacher &OrgObj){
        cout<<"I am a custom copy constructor"<<endl;
        this->name = OrgObj.name;
        this->dept = OrgObj.dept;
        this->subject = OrgObj.subject;
        this->salary = OrgObj.salary;
   } 

    //properties/attributes
    
    
    //methods/member functions

    void changeDept(string newDept){
        dept = newDept;
    }

    //setter
    void setSalary(double s){
         salary = s;
    }

    //getter
    double getSalary(){
        return salary;
    }

    void getInfo(){
        cout<<"name: "<<name<<endl;
        cout<<"subject: "<<subject<<endl;
        
    }
};

// class Student{
//   public:
//       string name;
//       int rollNo;
//       int age;


// };

int main(){
    
    Teacher t1("Deepak","Computer Science","C++",25000);
    // t1.getInfo();

    Teacher t2(t1);   // default copy constructor - invoked
    t2.getInfo();
    // Teacher t2;
    // t1.name = "Deepak";
    // t1.subject = "C++";
    // // t1.dept = "Computer Science";
    // t1.setSalary(25000);
    // // t1.salary = 25000;
    
    // cout<<t1.name<<endl;
    // cout<<t1.dept<<endl;
    // cout<<t1.getSalary()<<endl;
    return 0;    
}