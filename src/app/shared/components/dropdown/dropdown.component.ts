import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, ClickOutsideDirective],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true,
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor{
  @Input() label: string = '';
  @Input() options: string[] = [];

  public showDropdown = false;
  public arrowDown = faArrowDown;
  public arrowUp = faArrowUp;
  public value: string = '';
  public disabled: boolean = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  public dropdownToggle(): void{
    this.showDropdown = !this.showDropdown;
  }

  selectedOption(event: string) {
    this.label = (event);
    this.onChange(event);
  }

  writeValue(obj: any): void {
    console.log(obj);
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
