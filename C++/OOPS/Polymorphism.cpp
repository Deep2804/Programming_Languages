#include<iostream>
#include<string>
using namespace std;

//  !------Compile Time Polymorphism------------!
// --------Constructor Overloading--------
// class Student{
// public:
//      string name;

//      Student(){
//         cout<<"Non parametrized Constructor"<<endl;
//      }
//      Student(string name){
//         this->name = name;
//         cout<<"Parametrized Constructor"<<endl;
//      }

// };


// int main(){
//     Student s1("Deepak Singh");
//     return 0;
// }

// -----Function Overloading-----
// class Print{
// public:
//     void show(int x){
//         cout<<"int: "<<x<<endl;
//     }

//     void show(char ch){
//         cout<<"Char: "<<ch<<endl;
//     }

// };

// int main(){
//     Print p1;
//     // p1.show(101);
//     p1.show('%');
// }

// !----------Run Time Polymorphism------------!
//  -----Function Overriding------
// class Parent{
// public:
//     getInfo(){
//         cout<<"Parent Class"<<endl;
//     }    
// };

// class Child : public Parent{
// public:
//     getInfo(){
//         cout<<"Child Class"<<endl;
//     }    
// };


// int main(){

//     // Child c1;
//     // c1.getInfo();

//     Parent p1;
//     p1.getInfo();
//     return 0;
// }

// ----Virtual Function----

class Parent{
public:
    void getInfo(){
        cout<<"Parent Class"<<endl;
    }   

    virtual void hello(){
        cout<<"Hello from Parent"<<endl;
    } 
};
class Child : public Parent{
public:
    void getInfo(){
        cout<<"Child Class"<<endl;
    } 
    void hello(){
        cout<<"Hello from Child"<<endl;
    }      
};

int main(){
    Child c1;
    c1.hello();
    
    return 0;
}