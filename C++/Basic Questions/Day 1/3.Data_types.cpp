#include<iostream>
using namespace std;

int main(){
    int x;
    char c;
    double d;
    float f;
    long l;

    cin>>x;
    cin>>c;
    cin>>d;
    cin>>f;
    cin>>l;

    cout<<"Integer size is:"<<sizeof(x)<<endl;
    cout<<"Character size is:"<<sizeof(c)<<endl;
    cout<<"Double size is:"<<sizeof(d)<<endl;
    cout<<"Float size is:"<<sizeof(f)<<endl;
    cout<<"Long size is:"<<sizeof(l)<<endl;
    return 0;
}
