import {Injectable} from "@angular/core";

@Injectable()
export class GraphServiceConfiguration{
    private server:string = "http://localhost:3000";
    private api:string = "/graphservice";

    public getServerwithApiURL(): string{
        return this.server + this.api;
    }
}