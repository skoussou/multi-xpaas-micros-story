import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class AuthService {
  private username: string;
  private password: string;
  private loginOK: boolean;
  private hostname: string;
  private port: number;
  private protocol: string;
  private qualifiedHost: string;

  constructor(
    private settings: SettingsService,
    @Inject(Window) private _window: Window
  ) { }

  doLogin(username: string, password: string): Observable<boolean> {
    this.username = username;
    this.loginOK = true;

    // bpm host and credentials should come back in auth call
    // for now hardcode:
    this.settings.setBpmsCreds({
      username: 'kieserver',
      password: 'password1!'
    });

    this.hostname = this._window.location.hostname;
    this.port = + this._window.location.port;
    this.protocol =  this._window.location.protocol;

    // Account for localhost.. its pretty brittle right now...
    if (this.hostname === 'localhost'){
        this.qualifiedHost = this.protocol + '//' + this.hostname + ':' + 8080;
    } else {
        this.qualifiedHost = this.protocol + '//' + this.hostname + ':' + this.port;
    }

    console.log('Using Hostname: ' + this.qualifiedHost);
    this.settings.setHost(this.qualifiedHost);
    //this.settings.setHost('http://localhost:8080');

    // TODO make auth call here
    return Observable.of(true);
  }

  getUsername(): string {
    return this.username;
  }

  isLoggedIn(): boolean {
    return this.loginOK;
  }

  logout(): void {
    this.username = null;
    this.password = null;
    this.loginOK = false;
  }

}
