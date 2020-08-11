/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */
const express = require('express')
const apiStubs = function (app, server, compiler) {
  app.use(express.json());
  // do auth

  app.post('/api/v0.1-dev/auth', function (req, res) {

    if (req && req.body && req.body.username && req.body.username == "test" && req.body.password == "123") {
      res.json({
        success: true,
        data: {
          token: "SOME-JWT-TOKEN-------------------------------------xxxxxxxxxxxxxxxxxx-----------"
        }
      });
    } else {
      res.json({
        success: false,
        message: "Unauth"
      });
    }
  });

  app.delete('/api/v0.1-dev/auth', function (req, res) {
    res.json({
      success: true
    });
  });


  //store
  app.get('/api/v0.1-dev/store', function (req, res) {
    res.json({
      success: true,
      data: {
        status: {
          messages: 3,
          orders: 3
        },
        info: "info-info-info-from-rest"
      }
    });
  });

  // update store settings
  app.post('/api/v0.1-dev/store', function (req, res) {
    res.json({
      success: true
    });
  });




  // update store settings
  app.delete('/api/v0.1-dev/orders', function (req, res) {
    res.json({
      success: true
    });
  });
  app.post('/api/v0.1-dev/orders', function (req, res) {
    res.json({
      success: true
    });
  });
  app.get('/api/v0.1-dev/orders', function (req, res) {
    res.json({
      success: true,
      data: [{
          id: "234",
          status: "new",
          client: {
            id: "guid-ploni",
            name: "פלוני אלמוני"
          },
          date: "10/5/2020 14:33"
        },
        {
          id: "235",
          status: "in_progress",
          client: {
            id: "guid-ploni",
            name: "פלוני אלמוני"
          },
          date: "10/5/2020 16:33"
        },
        {
          id: "230",
          status: "ready",
          client: {
            id: "guid-ii",
            name: "ישראל ישראלי"
          },
          date: "10/4/2020 00:00"
        }
      ]
    });
  });

  app.delete('/api/v0.1-dev/orders/:orderId/:productId', function (req, res) {
    res.json({
      success: true
    });
  });
  app.get('/api/v0.1-dev/orders/:orderId', function (req, res) {
    res.json({
      success: true,
      data: {
        id: 236,
        client: {
          id: "guid-ploni",
          name: "פלוני אלמוני"
        },
        products: [{
          id: "1",
          name: "תפוח זהב",
          image: "http--url",
          price: 50
        }]
      }
    });
  });


  // Products
  app.delete('/api/v0.1-dev/products', function (req, res) {
    res.json({
      success: true
    });
  });
  app.post('/api/v0.1-dev/products', function (req, res) {
    res.json({
      success: true
    });
  });
  app.get('/api/v0.1-dev/products', function (req, res) {
    res.json({
      success: true,
      data: [{
          id: "1",
          name: "תפוח זהב",
          image: "http--url",
          price: 50
        },
        {
          id: "2",
          name: "תפוח זהב 1",
          image: "http--url",
          price: 50
        },
        {
          id: "3",
          name: "תפוח זהב 2",
          image: "http--url",
          price: 50
        }
      ]
    });
  });

  // Clients
  app.delete('/api/v0.1-dev/clients', function (req, res) {
    res.json({
      success: true
    });
  });
  app.post('/api/v0.1-dev/clients', function (req, res) {
    res.json({
      success: true
    });
  });
  app.get('/api/v0.1-dev/clients', function (req, res) {
    res.json({
      success: true,
      data: [{
          id: "guid-ii",
          name: "ישראל ישראלי"
        },
        {
          id: "guid-ploni",
          name: "פלוני אלמוני"
        }
      ]
    });
  });

}

module.exports = function ( /* ctx */ ) {
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: [

      'i18n',
      'axios'
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      rtl: true, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      showProgress: true,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      before: apiStubs,
      https: false,
      port: 8080,
      open: true // opens browser window automatically
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'auto',

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: 'MicroProject STAS UI',
        short_name: 'MicroProject STAS UI',
        description: 'STATS UI',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [{
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'mp-stat-ui'
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack( /* cfg */ ) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  }
}
