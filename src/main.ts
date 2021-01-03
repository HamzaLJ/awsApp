import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Comment the below line to get rid of the white screen when building for Android
Amplify.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
