// assistant.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assistant',
  imports: [CommonModule, FormsModule],
  templateUrl: './assistant.html',
  styleUrls: ['./assistant.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssistantComponent implements OnInit {
  currentTime: string = '';
  messageInput: string = '';
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  selectedFile: File | null = null;
  selectedFileName: string = '';
  fileIconClass: string = 'fas fa-file';

  ngOnInit(): void {
    this.currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  openModal(): void {
    document.getElementById('uploadModal')?.classList.add('show');
  }

  closeModal(): void {
    document.getElementById('uploadModal')?.classList.remove('show');
    this.removeFile();
  }

  sendMessage(): void {
    if (!this.messageInput.trim()) return;
    this.messages.push({ text: this.messageInput.trim(), sender: 'user' });
    this.messageInput = '';
    setTimeout(() => {
      this.messages.push({
        text: 'Réponse automatique : je traite votre message.',
        sender: 'bot'
      });
    }, 1000);
  }

  handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
      this.fileIconClass = this.getFileIcon(file);
    }
  }

  getFileIcon(file: File): string {
    if (file.type.includes('pdf')) return 'fas fa-file-pdf';
    if (file.type.includes('word') || file.name.endsWith('.docx')) return 'fas fa-file-word';
    if (file.type.includes('text') || file.name.endsWith('.txt')) return 'fas fa-file-alt';
    return 'fas fa-file';
  }

  removeFile(): void {
    this.selectedFile = null;
    this.selectedFileName = '';
  }

  confirmUpload(): void {
    if (!this.selectedFile) {
      alert('Veuillez sélectionner un fichier');
      return;
    }

    this.messages.push({ text: `Document importé: ${this.selectedFileName}`, sender: 'user' });

    setTimeout(() => {
      this.messages.push({
        text: "J'ai analysé le document. Vous pouvez maintenant me poser des questions spécifiques sur son contenu.",
        sender: 'bot'
      });
    }, 1500);

    this.closeModal();
  }

  preventDefaults(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  highlight(): void {
    const dropArea = document.getElementById('dropArea');
    if (dropArea) {
      dropArea.style.borderColor = 'var(--primary-color)';
      dropArea.style.backgroundColor = 'rgba(119, 181, 254, 0.1)';
    }
  }

  unhighlight(): void {
    const dropArea = document.getElementById('dropArea');
    if (dropArea) {
      dropArea.style.borderColor = '#ced4da';
      dropArea.style.backgroundColor = 'transparent';
    }
  }

  handleDrop(event: DragEvent): void {
    this.preventDefaults(event);
    if (event.dataTransfer?.files?.length) {
      this.selectedFile = event.dataTransfer.files[0];
      this.selectedFileName = this.selectedFile.name;
      this.fileIconClass = this.getFileIcon(this.selectedFile);
    }
  }
}
