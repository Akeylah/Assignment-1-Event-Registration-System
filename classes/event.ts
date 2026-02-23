export class Event {

    private event_id: string;
    private event_name: string;
    private event_date: Date;
    private numofparticipants: number;
    private max_participants: number;


    constructor(

        event_id: string,
        event_name: string,
        event_date: Date,
        max_participants: number,
        numofparticipants: number = 0

    ) {

        this.event_id = event_id;
        this.event_name = event_name;
        this.event_date = event_date;
        this.max_participants = max_participants;
        this.numofparticipants = numofparticipants;

    }



    // Check space

    public hasSpace(): boolean {

        return this.numofparticipants < this.max_participants;

    }



    // Add participant

    public addParticipant(): boolean {

        if (this.hasSpace()) {

            this.numofparticipants++;

            return true;

        }

        return false;

    }



    // Display event info

    public displayInfo(): string {

        return `
Event ID: ${this.event_id}
Event Name: ${this.event_name}
Date: ${this.event_date}
Participants: ${this.numofparticipants}
Max Participants: ${this.max_participants}
`;

    }

}