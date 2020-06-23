// module.exports = {
//
//     '@tags': ['login'],
//     'Login test': function (browser) {
//         browser
//             .url(browser.launch_url + '/user/login')
//             .waitForElementVisible('#edit-name',1000)
//             .waitForElementVisible('#edit-pass',1000)
//             .setValue('#edit-name', 'admin')
//             .setValue('#edit-pass', 'admin123')
//             .click('#edit-submit')
//             .assert.titleContains('admin')
//         browser.end();
//
//
//     }
// }