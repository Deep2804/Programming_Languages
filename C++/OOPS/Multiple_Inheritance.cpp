#include<iostream>
#include<string>
using namespace std;

class Student{
public:
        string name;
        int rollno;
};

class Teacher{
public:
        string subject;
        double salary;
};

class TA : public Student, public Teacher{
    public:
        string classroom;
};

int main(){
    TA t1;
    t1.name = "Deepak Singh";
    t1.rollno = 123;
    t1.subject = "Computer Science";
    t1.salary = 25000;
    t1.classroom = "B.Tech";
    cout<<"Name: "<<t1.name<<endl;
    cout<<"RollNo: "<<t1.rollno<<endl;
    cout<<"Subject: "<<t1.subject<<endl;
    cout<<"Salary: "<<t1.salary<<endl;
    cout<<"Classroom: "<<t1.classroom<<endl;
    
}