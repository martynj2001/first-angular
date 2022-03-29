import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server Created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']

  userName = "Enter a User Name";
  validUser = false;

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}

