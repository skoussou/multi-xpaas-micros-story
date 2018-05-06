import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-modal-process-details',
  templateUrl: './modal-process-details.component.html',
  styleUrls: ['./modal-process-details.component.css']
})
export class ModalProcessDetailsComponent implements OnInit {
  private svgUrl: string;

  @Input() definition: any;

  constructor(
    public modalService: NgbActiveModal,
    private settings: SettingsService
  ) { }

  ngOnInit(): void {

    if (this.definition['process-instance-id']) {
      this.svgUrl = this.settings.getHost() +
        `/kie-server/services/rest/server` +
        `/containers/${this.definition['container-id']}/images/processes/instances/${this.definition['process-instance-id']}`;

    } else {
      this.svgUrl = this.settings.getHost() +
        `/kie-server/services/rest/server` +
        `/containers/${this.definition['container-id']}/images/processes/${this.definition['process-id']}`;
    }
  }

  close(): void {
    this.modalService.close('close after success');
  }

}
