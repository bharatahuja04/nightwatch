module.exports = {
  src_folders: "tests",
  output_folder : "tests_output",

  webdriver: {
    start_process: true,
    start_session: true,
    port: 9515,
    server_path: 'node_modules/chromedriver/bin/chromedriver',

    cli_args: [
      // --verbose
    ]
  },

    test_settings: {
      default: {
        launch_url: 'http://nightwatch-testsite.dd:8083',
        selenium_port: 9515,
        selenium_host: 'localhost',
        silent: true,
        page_objects_path: 'tests',
        custom_commands_path: 'tests'
      },


      chrome: {
        desiredCapabilities : {
          browserName : 'chrome',
          javascriptEnabled: true,
          alwaysMatch: {
            acceptInsecureCerts: true,
            acceptSslCerts: true,
          chromeOptions: {
            args: [
                '--headless'
            ],
          binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'

          }

          }
        },


        }
      },
    }


