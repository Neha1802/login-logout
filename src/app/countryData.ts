export class countryData
{
    ID : number
    Country : string;
    Confirmed : number;
    Deaths : number;
    Recovered : number;
    Active : number;

    

    constructor(ID: number, Country: string, Confirmed : number, Deaths : number, Recovered : number, Active : number){
        this.ID = ID
        this.Country = Country;
        this.Confirmed = Confirmed;
        this.Deaths = Deaths;
        this.Recovered = Recovered;
        this.Active = Active;

        
    }
}