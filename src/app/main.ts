import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { KeycloakService } from '../providers/keycloak-service/keycloak.service';

KeycloakService.init({ onLoad: 'login-required', checkLoginIframe: false }).then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
}).catch((err: any) => {
    console.log('Error in bootstrap: ' + JSON.stringify(err));
});
