#include <iostream>
#include "Event.h"

using namespace std;

Event::Event()
{
    numParticipants = 0;
}

void Event::addEvent()
{

    cout << "Enter Event ID: ";
    cin >> eventID;

    cout << "Enter Event Name: ";
    cin >> eventName;

    cout << "Enter Event Date: ";
    cin >> eventDate;

    cout << "Enter Max Participants: ";
    cin >> maxParticipants;

}

void Event::displayEvent()
{

    cout << "\nEvent ID: " << eventID << endl;
    cout << "Event Name: " << eventName << endl;
    cout << "Event Date: " << eventDate << endl;
    cout << "Participants: " << numParticipants << "/" << maxParticipants << endl;

}

bool Event::isFull()
{

    if(numParticipants >= maxParticipants)
        return true;
    else
        return false;

}

void Event::addParticipant()
{

    numParticipants++;

}

int Event::getEventID()
{

    return eventID;

}
