// it('TC001', async () => {
//     await browser.url('https://webdriver.io')
//     //setTimeout(implicit, pageLoad, script)
//     // await browser.setTimeouts(5000, 8000, 4000)
//     await browser.setTimeout({'implicit': 5000})
//     console.log(await browser.getTimeouts())
// })

// implicit - browser session wait 
// explicit - specific wait added to a wait method suchas waitForExist...
// implicit and explicit waits get added together

it('TC002', async () => {
    await browser.url('https://the-internet.herokuapp.com')
    await $('<h3>').waitForExist({timeout: 10000})
})