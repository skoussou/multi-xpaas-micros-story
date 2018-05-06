import { Injectable } from '@angular/core';
import { Credentials } from '../models';

@Injectable()
export class SettingsService {
  private bpmsUsername: string;
  private bpmsPassword: string;
  private host: string;

  constructor() {
    // host and credentials should be initialised in auth service

    // this.host = 'http://localhost:8080'; //default for dev
    // this.bpmsUsername = 'kieserver'; //default for dev
    // this.bpmsPassword = 'password1!' //default for dev
  }

  setHost(host: string): void {
    this.host = host;
  }

  getHost(): string {
    return this.host;
  }

  setBpmsCreds(creds: Credentials): void {
    this.bpmsUsername = creds.username;
    this.bpmsPassword = creds.password;
  }

  getBpmsCreds(): Credentials {
    return {
      username: this.bpmsUsername,
      password: this.bpmsPassword
    };
  }

  getAuth(): string {
    return 'Basic ' + btoa(`${this.bpmsUsername}:${this.bpmsPassword}`);
  }

}
