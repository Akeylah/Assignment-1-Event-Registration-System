#include <iostream>
#include "Student.h"
#include "Event.h"

using namespace std;

int main()
{

    Student students[100];
    Event events[100];

    int studentCount = 0;
    int eventCount = 0;

    int choice;

    do
    {

        cout << "\n===== Event Registration System =====\n";

        cout << "1. Add Student\n";
        cout << "2. Add Event\n";
        cout << "3. Register Student to Event\n";
        cout << "4. View Students\n";
        cout << "5. View Events\n";
        cout << "6. Exit\n";

        cout << "Enter choice: ";
        cin >> choice;

        if(choice == 1)
        {

            students[studentCount].addStudent();
            studentCount++;

        }

        else if(choice == 2)
        {

            events[eventCount].addEvent();
            eventCount++;

        }

        else if(choice == 3)
        {

            int sid, eid;

            cout << "Enter Student ID: ";
            cin >> sid;

            cout << "Enter Event ID: ";
            cin >> eid;

            for(int i=0;i<studentCount;i++)
            {

                if(students[i].getStudentID() == sid)
                {

                    for(int j=0;j<eventCount;j++)
                    {

                        if(events[j].getEventID() == eid)
                        {

                            if(events[j].isFull())
                            {

                                cout << "Event is full.\n";

                            }

                            else
                            {

                                students[i].registerEvent(eid);
                                events[j].addParticipant();

                                cout << "Student Registered Successfully.\n";

                            }

                        }

                    }

                }

            }

        }

        else if(choice == 4)
        {

            for(int i=0;i<studentCount;i++)
            {

                students[i].displayStudent();

            }

        }

        else if(choice == 5)
        {

            for(int i=0;i<eventCount;i++)
            {

                events[i].displayEvent();

            }

        }

    }

    while(choice != 6);

    return 0;

}
