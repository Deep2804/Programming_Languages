#include <iostream>
#include <string>
using namespace std;

class Student{
public:
    string name;
    double* cgpaPtr;

    Student(string name, double cgpa){
        this->name = name;
        cgpaPtr = new double;
        *cgpaPtr = cgpa;

    }


    // Student(Student &obj){
    //     this->name = obj.name;
    //     cgpaPtr = new double;
    //     *cgpaPtr = *obj.cgpaPtr;
    // }

    //Destructor
    ~Student(){
        cout<<"Hi, I delete Everything!"<<endl;
        delete cgpaPtr;  //memory leak
    }

    void getInfo(){
        cout<<"name: "<<name<<endl;
        cout<<"cgpa: "<<*cgpaPtr<<endl;
    }


};




int main(){
    Student s1("Deepak Singh", 8.9);
    // s1.getInfo();
    // Student s2(s1);
    // s1.getInfo();
    // *(s2.cgpaPtr) = 9.2;
    // s1.getInfo();

    // s2.name = "Nisha";
    // s2.getInfo();

    s1.getInfo();
    return 0;
}