import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/pluck';
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
platformBrowserDynamic().bootstrapModule(AppModule);
