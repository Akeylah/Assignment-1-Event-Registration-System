#ifndef STUDENT_H
#define STUDENT_H
#include <string>
using namespace std;

class Student {

private:
    int studentID;
    string firstName;
    string lastName;
    string department;
    int registeredEventID;

public:
    Student(int, string, string,string, int);
    void setstudentID(int);
    void setfirstName(string);
    void setlastName(string);
    void setdepartment(string);
    void setregisteredEventID(int);

    int getstudentID();
    string getfirstName();
    string getlastName();
    string getdepartment();
    int getregisteredEventID();   

    void addStudent();
    void displayStudent();
    void registerEvent(int eventID);
    int getStudentID();
    int getRegisteredEventID();
};

#endif
