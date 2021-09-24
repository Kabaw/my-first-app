import { Component, Input } from '@angular/core';
import { ServerInfo } from '../servers/servers.component';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    
    @Input('serverName')
    serverName: string;

    @Input('serverInfo')
    serverInfo: ServerInfo;
}