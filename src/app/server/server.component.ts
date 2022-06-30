import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    name = '';
    enableButton = false;

    constructor(){}

    onName(event: Event){
        this.name = (<HTMLInputElement>event.target).value
        this.enableButton = true;
    }

    sendName(){
        this.name = '';
        this.enableButton =  false;
    }
}