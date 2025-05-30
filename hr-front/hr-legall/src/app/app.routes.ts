// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools';
import { AssistantComponent } from './assistant/assistant';
import { HomeComponent } from './home/home';

export const routes: Routes = [

  { path: 'home',component:HomeComponent},
    {path: 'tools', component: ToolsComponent },
  { path: 'assistant', component: AssistantComponent }
];
