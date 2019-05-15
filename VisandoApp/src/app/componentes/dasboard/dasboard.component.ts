
import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { OptionsInput } from '@fullcalendar/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ModelConsulado } from '../../Models/model.consulado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
   options: OptionsInput;
   public userConsulado: ModelConsulado[] = [];
   public locale = esLocale;
   closeResult: string;
   calendarPlugins = [dayGridPlugin]; // important!
   
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  constructor(private router: Router, private user: UsersService, private modalService: NgbModal,
              public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.user.loadConsulado().subscribe((response) => {
      console.log('Result: ', response);
    });
    this.user.loadRelacion().subscribe((result) => {
      console.log('Relacion: ', result);
    });
    this.user.loadStatusCita().subscribe((result) => {
      console.log('Cita: ', result);
    });
    this.user.loadStatusPago().subscribe((result) => {
      console.log('Pago: ', result);
    });
    this.user.loadStatusVisa().subscribe((result) => {
      console.log('Visa: ', result);
    });
    //#region Options modal region
    this.options = {
      editable: true,
      locale: esLocale,
      customButtons: {
        myCustomButton: {
          text: 'Agregar cita',
          click: function () {
            var btnModal = document.getElementById('btnModal');
            btnModal.click();
          }
        }
      },
      header: {
        right: 'myCustomButton today prev,next'
      },
      plugins: [dayGridPlugin, interactionPlugin]
    };
    //#endregion
  }
  //#region Modal open close
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  //#endregion

  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  goToAdd() {
    this.router.navigate(['/main/addCustomer']);
  }

}
