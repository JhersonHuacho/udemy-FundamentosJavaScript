// 18. Object Destructuring

/**
 * Que no es mas de como extraes los valores de un objeto.
 */

 const aprendiendoJS = {
     version: {
         nueva: 'ES6',
         anterior:'ES5'
     },
     frameworks: ['React','VueJS','AngularJS']
 };

 // Destructuring es extraer valores de un objeto
 console.log(aprendiendoJS);

 // version anterior
 let version = aprendiendoJS.version.nueva;
 let framework = aprendiendoJS.frameworks;
 console.log(version);
 console.log(framework);
 console.log(framework[1]);

 // Destructuring forma nueva
 const aprendiendoJSnew = {
    versionNew: {
        nueva: 'ES6',
        anterior:'ES5'
    },
    frameworksNew: ['React','VueJS','AngularJS']
};

 let {versionNew, frameworksNew} = aprendiendoJSnew;
 console.log(versionNew);
 console.log(frameworksNew);

 let {nueva} = aprendiendoJSnew.versionNew;
 console.log(nueva);