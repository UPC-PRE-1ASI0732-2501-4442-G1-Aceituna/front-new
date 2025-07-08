import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {Profile} from "../../model/profile";
import {NgIf, CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  @Input() profile!: Profile;
  @Output() profileChange = new EventEmitter<Profile>();
  
  showRucField = true;
  isSubmitting = false;
  showSuccessMessage = false;
  
  options = [
    {path: '/sellereditProfile', title: 'sellereditProfile'}
  ]
  
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[\d\s-()]+$/)]),
    ruc: new FormControl('', [Validators.pattern(/^\d{11}$/)])
  });

  constructor() {
    this.profile = new Profile({id: 1});
  }

  ngOnInit() {
    // Populate form when profile data is loaded
    if (this.profile) {
      this.profileForm.patchValue({
        name: this.profile.fullName || '',
        email: this.profile.email || '',
        phone: this.profile.phoneNumber || '',
        ruc: this.profile.ruc || ''
      });
    }
  }

  ngOnChanges() {
    // Update form when profile input changes
    if (this.profile) {
      this.profileForm.patchValue({
        name: this.profile.fullName || '',
        email: this.profile.email || '',
        phone: this.profile.phoneNumber || '',
        ruc: this.profile.ruc || ''
      });
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call delay
      setTimeout(() => {
        this.updateProfile();
        this.profileChange.emit(this.profile);
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.profileForm.controls).forEach(key => {
        this.profileForm.get(key)?.markAsTouched();
      });
    }
  }

  updateProfile(){
    this.profile.fullName = this.profileForm.get('name')?.value ?? '';
    this.profile.email = this.profileForm.get('email')?.value ?? '';
    this.profile.phoneNumber = this.profileForm.get('phone')?.value ?? '';
    this.profile.ruc = this.profileForm.get('ruc')?.value ?? '';
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getProfileCompletion(): number {
    let completed = 0;
    const total = 4; // name, email, phone, image
    
    if (this.profile?.fullName) completed++;
    if (this.profile?.email) completed++;
    if (this.profile?.phoneNumber) completed++;
    if (this.profile?.image) completed++;
    
    return Math.round((completed / total) * 100);
  }
}
