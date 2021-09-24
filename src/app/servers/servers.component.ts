import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServerInfo{
  activeServer: boolean = true;
}

export class ServersComponent implements OnInit {

  serverInfo: ServerInfo;
  //activeServer: boolean

  constructor() { }

  ngOnInit(): void {
    this.serverInfo = { activeServer: true};
  }

  changeServer(): void{
    this.serverInfo.activeServer = !this.serverInfo.activeServer;
  }
}
