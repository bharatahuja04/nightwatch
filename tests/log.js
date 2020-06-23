// var loginCommands = {
//
//     logins: function(browser) {
//         browser
//             .url(browser.launch_url + '/user/login')
//             .waitForElementVisible('#edit-name',1000)
//             .waitForElementVisible('#edit-pass',1000)
//             .setValue('#edit-name', 'admin')
//             .setValue('#edit-pass', 'admin123')
//             .click('#edit-submit')
//             .assert.titleContains('admin')
//
//     }
// };
//
// module.exports = {
//     commands: [loginCommands],
//     url: 'http://nightwatch-testsite.dd:8083/user/login',
//
//     elements: {
//         userName: {
//             selector: '#edit-name'
//         },
//         password: {
//             selector: '#edit-pass'
//         },
//         submit: {
//             selector: '#edit-submit'
//         }
//     }
// };
//
