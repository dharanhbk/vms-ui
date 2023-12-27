// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    authorize_uri: 'https://794a-103-98-209-72.ngrok-free.app/oauth2/authorize?',
    client_id : 'vms-client',
    redirect_uri: 'https://19d3-103-98-209-72.ngrok-free.app/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    token_url: 'https://794a-103-98-209-72.ngrok-free.app/oauth2/token',
    grant_type: 'authorization_code',
    resource_url: 'https://4fe7-103-98-209-72.ngrok-free.app',
    logout_url: 'https://794a-103-98-209-72.ngrok-free.app/logout',
    secret_pkce: 'secret'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  