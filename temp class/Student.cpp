#include <iostream>
#include "Student.h"

using namespace std;

Student::Student()
{
    registeredEventID = 0;
}

void Student::addStudent()
{
    cout << "Enter Student ID: ";
    cin >> studentID;

    cout << "Enter First Name: ";
    cin >> firstName;

    cout << "Enter Last Name: ";
    cin >> lastName;

    cout << "Enter Department: ";
    cin >> department;
}

void Student::displayStudent()
{
    cout << "\nStudent ID: " << studentID << endl;
    cout << "Name: " << firstName << " " << lastName << endl;
    cout << "Department: " << department << endl;
    cout << "Registered Event ID: " << registeredEventID << endl;
}

void Student::registerEvent(int eventID)
{
    registeredEventID = eventID;
}

int Student::getStudentID()
{
    return studentID;
}

int Student::getRegisteredEventID()
{
    return registeredEventID;
}
