module.exports = {

    '@tags': ['testss'],
    'Demo test google.com': function(browser) {
        browser
            .url(browser.launch_url)
            .assert.title('Welcome to nightwatch test site | nightwatch test site')
            .end();

    }
}