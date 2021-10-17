import { Component, Input, OnInit } from '@angular/core';
import { ServerInfo } from '../servers/servers.component';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
    
    @Input('serverName')
    serverName: string;

    @Input('serverInfo')
    serverInfo: ServerInfo;

    @Input('serverStatusReference')
    serverStatusReference: boolean;

    ngOnInit(){
        debugger;
    }
}