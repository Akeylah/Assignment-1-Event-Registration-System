export class Student {

    private student_id: string;
    private first_name: string;
    private last_name: string;
    private department: string;
    private registeredevent_id: string | null;

    constructor(
        student_id: string,
        first_name: string,
        last_name: string,
        department: string,
        registeredevent_id: string | null = null
    ) {

        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.department = department;
        this.registeredevent_id = registeredevent_id;

    }


    // Getters

    public getStudentID(): string {

        return this.student_id;

    }

    public getFirstName(): string {

        return this.first_name;

    }

    public getLastName(): string {

        return this.last_name;

    }

    public getDepartment(): string {

        return this.department;

    }

    public getRegisteredEvent(): string | null {

        return this.registeredevent_id;

    }



    // Register student to event

    public registerEvent(event_id: string): void {

        this.registeredevent_id = event_id;

    }



    // Display student info

    public displayInfo(): string {

        return `
Student ID: ${this.student_id}
Name: ${this.first_name} ${this.last_name}
Department: ${this.department}
Registered Event: ${this.registeredevent_id}
`;

    }

}