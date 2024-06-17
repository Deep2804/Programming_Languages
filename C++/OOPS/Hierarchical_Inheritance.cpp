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

int main(){
   Student s1;
   s1.name = "Deepak Singh";
   s1.age = 22;
   s1.rollno = 1234;

   cout<<"Student Name: "<<s1.name<<endl;
   cout<<"Student Age: "<<s1.age<<endl;
   cout<<"Student RollNo: "<<s1.rollno<<endl;


   Teacher t1;
   t1.name = "Rudhra Singh";
   t1.age = 25;
   t1.subject = "Computer Science";

   cout<<"Teacher Name: "<<t1.name<<endl;
   cout<<"Teacher Age: "<<t1.age<<endl;
   cout<<"Teacher Subject: "<<t1.subject<<endl;

}