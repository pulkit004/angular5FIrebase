// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDd4nUuLXAPVtvjkV2NN394Xcn0__NAbE8",
    authDomain: "angfirebasedemo.firebaseapp.com",
    databaseURL: "https://angfirebasedemo.firebaseio.com",
    projectId: "angfirebasedemo",
    storageBucket: "",
    messagingSenderId: "243185249818"
  }
};
