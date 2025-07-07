import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Información de contacto
  contactInfo = {
    email: 'contacto@ecomovil.com',
    phone: '+51 934 893 731',
    address: 'Lima, Perú',
    whatsapp: 'https://wa.me/51934893731'
  };

  // Redes sociales
  socialLinks = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin-in' }
  ];

  // Enlaces útiles
  usefulLinks = [
    { name: 'Términos y Condiciones', url: '#' },
    { name: 'Política de Privacidad', url: '#' },
    { name: 'Preguntas Frecuentes', url: '#' },
    { name: 'Soporte', url: '#' }
  ];

  openWhatsApp() {
    window.open(this.contactInfo.whatsapp, '_blank');
  }

  sendEmail() {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }
}
