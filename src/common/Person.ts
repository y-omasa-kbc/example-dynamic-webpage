
export class Person {
    id: number;
    fullName: string;
    fullNameKana: string;
    gender: string;
    tel: string;
    eMail: string;
    postalCode: string;
    address: string;

    constructor(id:number, fullName:string, fullNameKana:string, gender:string, tel: string, 
                    eMail: string, postalCode: string, address: string){
        this.id = id;
        this.fullName = fullName;
        this.fullNameKana = fullNameKana;
        this.gender = gender;
        this.tel = tel;
        this.eMail = eMail;
        this.postalCode = postalCode;
        this.address = address;
    }
}
