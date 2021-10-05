export class UserWithId {
    Id: string;
    FirstName:string;
    LastName:string;
    DateOfBirth: string;
    PlaceOfBirth: string;
    MobileNumber: string;
    EmailId: string;

    constructor(
        Id: string,
        FirstName:string,
        LastName:string,
        DateOfBirth: string,
        PlaceOfBirth: string,
        MobileNumber: string,
        EmailId: string){
            this.Id = Id;
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.DateOfBirth = DateOfBirth;
            this.PlaceOfBirth = PlaceOfBirth;
            this.MobileNumber = MobileNumber;
            this.EmailId = EmailId;
        }
}