#include<iostream>
#include<string>
using namespace std;

class Person{
public:
    string name;
    int age;  
};

class Student : public Person{
    // name, age, rollno
public:
    int rollno;

};

class GradStudent : public Student{
    public:
        string researchArea;
};

int main(){

    GradStudent s1;
    s1.name = "Deepak";
    s1.researchArea = "Artificial Intelligence";
    s1.age = 22;
    s1.rollno = 1234;
    cout<<"Name: "<<s1.name<<endl;
    cout<<"Research Area: "<<s1.researchArea<<endl;
    cout<<"Age: "<<s1.age<<endl;
    cout<<"RollNo: "<<s1.rollno<<endl;

    return 0;
}