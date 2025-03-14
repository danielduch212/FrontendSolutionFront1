import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app/Components/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
