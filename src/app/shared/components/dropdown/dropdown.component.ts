import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: false,
  // imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements ControlValueAccessor{
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Output() clickEvent= new EventEmitter<string>();

  public showDropdown = false;

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
