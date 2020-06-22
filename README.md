
# Famenun App Quick Start Angular

This is a sample Famenun App made with angular. It shows the basic usuage of [@famenun/sdk](https://www.npmjs.com/package/@famenun/sdk)

### Usuage

Clone this repo into your local machine and serve it using the following commands

```sh
$ git clone https://github.com/famenun/famenun-app-quick-start-angular.git
$ cd famenun-app-quick-start-angular
$ npm i
$ ng s
```

**Build Famenun App Package (.fap file)**
install [@famenun/cli](https://www.npmjs.com/package/@famenun/cli) if you havent
``` sh
$ npm i @famenun/cli -g
```
**NOTE: before building app do the following**
 - change `<base href="/">` to `<base href="./">` in `index.html`
 - change `SDK.init("my_app_id", true);` to `SDK.init("my_app_id");` in `f-app-api.service.ts`
``` sh
$ ng build --prod
$ famenun build ./dist/famenun-app-quick-start-angular 
```

### Important Resources

 - [Famenun For Developers](https://developers.famenun.com/)
 - [Famenun App Docs](https://developers.famenun.com/docs)

License
----

MIT


**Free Utility, We all love that!**
