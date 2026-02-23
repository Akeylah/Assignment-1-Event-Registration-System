#ifndef EVENT_H
#define EVENT_H

#include <string>
using namespace std;

class Event
{

private:

    int eventID;
    string eventName;
    string eventDate;
    int numParticipants;
    int maxParticipants;

public:

    Event();

    void addEvent();

    void displayEvent();

    bool isFull();

    void addParticipant();

    int getEventID();

};

#endif
