import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { AssistantComponent } from './assistant/assistant';
import { ToolsComponent } from './tools/tools';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,AssistantComponent,ToolsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'hr-legal';
}
