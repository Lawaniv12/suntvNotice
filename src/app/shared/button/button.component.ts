import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Status } from 'src/app/types/shared.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() buttonImage!: string;
  @Input() overRideButtonClass!: boolean;
  @Input() customClass!: string;
  @Input() buttonImage2!: string;
  @Input() status!: Status;
  @Output() buttonClick = new EventEmitter<boolean>();

  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass: '';
  }

  handleClick(){
    this.buttonClick.emit(true)
  }
}
