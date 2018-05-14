// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCJ6-ZJdrT19a1euSr1I0aQ_vmzUY-ltaA',
    authDomain: 'kha-e-learning.firebaseapp.com',
    databaseURL: 'https://kha-e-learning.firebaseio.com',
    projectId: 'kha-e-learning',
    storageBucket: 'kha-e-learning.appspot.com',
    messagingSenderId: '266407526197'
  },
};
