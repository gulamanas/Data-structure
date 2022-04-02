#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;

    if (a > b)
    {
        if (a > c)
        {
            cout << "this is hekkk " << a << endl;
        }
        else
        {
            cout << c << endl;
        }
    }
    else
    {
        if (b > c)
        {
            cout << b << endl;
        }
        else
        {
            cout << "this is " << c << endl;
        }
    }
}