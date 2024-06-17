#include<iostream>
#include<string>
using namespace std;

class Person{
    public:
        string name;
        int age;
};
class Student : public Person{
    public:
        int rollno;
};
class Teacher : public Person{
    public:
        string subject;
};
class GradStudent : public Student{
    public:
        string researchArea;
};
class TA : public Student, public Teacher{
    public:
        string classroom;
};

int main(){
    Student s1;
    Teacher t1;
    GradStudent g1;
    TA ta1;
    // s1.name = "Deepak Singh";
    // s1.rollno = 123;
    // cout<<"Student Name: "<<s1.name<<endl;
    // cout<<"Student RollNo: "<<s1.rollno<<endl;

    // g1.name = "Deepak Singh";
    // g1.age = 12;
    // g1.rollno = 123;
    // g1.researchArea = "Artificial Intelligence";
    // cout<<"GradStudent Name: "<<g1.name<<endl;
    // cout<<"GradStudent RollNo: "<<g1.rollno<<endl;
    // cout<<"GradStudent Age: "<<g1.age<<endl;
    // cout<<"GradStudent ResearchArea: "<<g1.researchArea<<endl;


    // ta1.name = "Deepak Singh";
    // ta1.age = 12;
    ta1.rollno = 123;
    ta1.subject = "Artificial Intelligence";
    ta1.classroom = "B.Tech";

    // cout<<"GradStudent Name: "<<ta1.name<<endl;
    cout<<"GradStudent RollNo: "<<ta1.rollno<<endl;
    // cout<<"GradStudent Age: "<<ta1.age<<endl;
    cout<<"GradStudent Subject: "<<ta1.subject<<endl;
    cout<<"Classroom: "<<ta1.classroom<<endl;


}