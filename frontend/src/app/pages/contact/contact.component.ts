import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    time: '',
    title: 'Nuevo mensaje de contacto'
  };

  sendEmail(form: any): void {
    if (form.invalid) {
      alert('Por favor completa todos los campos.');
      return;
    }

    this.formData.time = new Date().toLocaleString('es-CO');

    emailjs.send(
      'service_ctxmuxa',
      'template_7e7vff8',
      this.formData,
      'Oy8tB5Ro2esHZsBDR'
    ).then(() => {
      alert('✅ Mensaje enviado con éxito');
      form.resetForm();
    }).catch((error) => {
      console.error('Error:', error);
      alert('❌ Ocurrió un error al enviar el mensaje.');
    });
  }
}
