interface Device{
    name: string;
}
     
class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
function Call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
export {Device, Phone, Call as Devices};