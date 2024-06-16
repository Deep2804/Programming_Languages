#include<iostream>
#include<string>
using namespace std;

class Person{
public:
    string name;
    int age; 

    Person(string name, int age){
        this->name = name;
        this->age = age;
    }  
    // Person(){
    //    cout<<"Parent Constructor"<<endl; 
    // } 
};

class Student : public Person{
    // name, age, rollno
public:
    int rollno;

    Student(string name, int age, int rollno) : Person(string name, int age){
        this->rollno = rollno;
    }


    void getInfo(){
        cout<<"name: "<<name<<endl;
        cout<<"age: "<<age<<endl;
        cout<<"rollno: "<<rollno<<endl;
    }    

};


int main(){
    Student s1("Deepak Singh",);
    
    s1.getInfo();


    return 0;
}