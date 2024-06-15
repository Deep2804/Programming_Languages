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

    //properties/attributes
    string name;
    string subject;
    string dept;
    
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
};

// class Student{
//   public:
//       string name;
//       int rollNo;
//       int age;


// };

int main(){
    Teacher t1;
    t1.name = "Deepak";
    t1.subject = "C++";
    t1.dept = "Computer Science";
    t1.setSalary(25000);
    // t1.salary = 25000;
    
    cout<<t1.name<<endl;
    cout<<t1.getSalary()<<endl;
    return 0;    
}