import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KieContainersService } from '../../services';
import { KieContainerCreate } from './../../models/kie-container';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
  containerForm: FormGroup;
  errMsg: string;
  createOK: boolean;
  inProgress: boolean;

  @Input() deleteContainer: boolean;
  @Input() containerName: boolean;

  constructor(
    public modalService: NgbActiveModal,
    private formBuilder: FormBuilder,
    private kieContainerService: KieContainersService
  ) { }

  ngOnInit(): void {
    this.initContainerForm();
  }

  initContainerForm(): void {
    this.containerForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, this.noWhitespaceValidator])
      ],
      group: [
        '',
        Validators.compose([Validators.required, this.noWhitespaceValidator])
      ],
      artifact: [
        '',
        Validators.compose([Validators.required, this.noWhitespaceValidator])
      ],
      version: [
        '',
        Validators.compose([Validators.required, this.noWhitespaceValidator])
      ]
    });

  }

  public noWhitespaceValidator(control: FormControl) {
    console.log('QQQQQ ',control.value)
    if (/\s/.test(control.value)) {
      console.log('true')
      return { 'whitespace': true }
    }
    console.log('false')
    return null
  }

  doCreateContainer(): void {
    debugger
    this.errMsg = null; // reset error message
    this.createOK = false;
    this.inProgress = true;
    const body: KieContainerCreate = {
      'container-id': this.containerForm.value.name,
      'release-id': {
        'version': this.containerForm.value.version,
        'group-id': this.containerForm.value.group,
        'artifact-id': this.containerForm.value.artifact
      }
    };
    this.kieContainerService.createContainer(body)
      .subscribe(container => {
        this.inProgress = false;
        if (container.error) {
          this.errMsg = 'Oh no, unable to create your Container.  Check console logs for error message';
        } else {
          this.createOK = true; // show success message and OK button
        }
        console.log('Got container ', JSON.stringify(container));
      });
  }

  close(): void {
    this.modalService.close('close after success');
  }

}
