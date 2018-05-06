import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalSettingsComponent } from '../../components/modal-settings/modal-settings.component'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  private user: string;
  public isCollapsed = false;

  constructor(
    private modal: NgbModal,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUsername();
  }

  showSettings(): void {
    this.modal.open(ModalSettingsComponent).result
      .then(result => {
        console.log('success from modal ', result);
        // this.getKieContainers()
      }, reason => {
        console.log('modal dismissed ', reason);
        // this.getKieContainers()
      });
  }

  doLogout():void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
