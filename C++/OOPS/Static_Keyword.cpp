#include<iostream>
#include<string>
using namespace std;

// void fun(){
//     static int x=0; // init statement -1 run
//     cout<<"x: "<<x<<endl;
//     x++;
// };

// class A{
// public:    
//     int x;
//     void incX(){
//         x = x + 1;
//     }
// };

class ABC{
public:
    ABC(){
        cout<<"Constructor"<<endl;
    }  
    ~ABC(){
        cout<<"Destructor"<<endl;
    }   
};

int main(){
    // fun();
    // fun();
    // fun();
    // A obj1;
    // A obj2;
    // obj1.x = 100;
    // obj2.x = 200;
    // cout<<obj1.x<<endl;
    // obj1.incX();
    // cout<<obj1.x<<endl;

    if(true){
        static ABC obj;
    }
    cout<<"End of Main"<<endl;
    return 0;
}