import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KieContainersService } from '../../services';
import { SettingsService } from '../../services/settings.service';
import { Credentials } from '../../models'

@Component({
  selector: 'app-modal-settings',
  templateUrl: './modal-settings.component.html',
  styleUrls: ['./modal-settings.component.css']
})
export class ModalSettingsComponent implements OnInit {
  // name: string;
  // group: string;
  // artifact: string;
  // version: string;
  private settingsForm: FormGroup;
  private bpmsCreds: Credentials;
  private disable: boolean;
  errMsg: string;
  // createOK:boolean;
  inProgress: boolean;

  // @Input() deleteContainer:boolean;
  // @Input() containerName:boolean;

  constructor(
    public modalService: NgbActiveModal,
    private formBuilder: FormBuilder,
    private settings: SettingsService,
    private kieContainerService: KieContainersService
  ) { }

  ngOnInit(): void {

    this.bpmsCreds = this.settings.getBpmsCreds();
    this.initSettingsForm();
  }

  initSettingsForm(): void {
    this.settingsForm = this.formBuilder.group({
      host: [
        {
          value: this.settings.getHost(),
          disabled: this.disable
        },
        Validators.compose([Validators.required])
      ],
      username: [
        {
          value: this.bpmsCreds.username,
          disabled: this.disable
        },
        Validators.compose([Validators.required])
      ],
      password: [
        {
          value: this.bpmsCreds.password,
          disabled: this.disable
        },
        Validators.compose([Validators.required])
      ]
    });
  }

  saveSettings(): void {
    this.errMsg = null;
    this.inProgress = true;
    this.kieContainerService.checkConnection(
      this.settingsForm.value.host,
      this.settingsForm.value.username,
      this.settingsForm.value.password
    )
      .subscribe(server => {
        console.log(new Date() + ' Connection call returned success ');
        this.inProgress = false;
        this.updateSettings();
        this.close();
      }, err => {
        // this.pollingUnsubscribe();
        this.inProgress = false;
        this.settingsForm.disable();
        console.log('oh no, connect to server fail');
        if (err.status === 401) {
          this.errMsg = 'Error: Status:401. Authorisation failed on connection to server';
        } else if (err.status) {
          this.errMsg = `Error: Status:${err.status}. Unable to connect to kie server`;
        } else {
          this.errMsg = `Error:  Unable to connect to kie server`;
        }
      });

  }

  updateSettings(): void{
    this.settings.setBpmsCreds({
      username: this.settingsForm.value.username,
      password: this.settingsForm.value.password
    });
    this.settings.setHost(this.settingsForm.value.host);
  }

  close(): void {
    this.modalService.close('close after success');
  }

}
