//Sleep
// it("TC001", async () => {
//     await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
//     await $('button=Start').click()
//     await browser.pause(10000)
//     console.log(await $('#finish').$('<h4 />').getText())
// })

// it("TC002", async () => {
//     await browser.url('https://output.jsbin.com/gecequg')
//     var field = await $('#MY_ID')
//     // await field.waitForClickable()
//     await field.click()
//     console.log("Result: " + await $("#demo").getText())
// })

// it("TC003", async () => {
//     await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
//     await $('button=Start').click()
//     var field = await $('#finish')
//     await field.waitForDisplayed({
//         timeout: 10000
//     })
//     console.log('Result: ' + await $('#finish').$('<h4 />').getText())
// })


// it("TC004", async () => {
//     await browser.url('https://output.jsbin.com/zivalup')
//     await browser.saveScreenshot('./test/specs/Screenshots/TC004_Before.png')
//     const elem = await $('#mydiv') 
//     await elem.waitForDisplayed({
//         reverse: true
//     })
//     await browser.saveScreenshot('./test/specs/Screenshots/TC004_After.png')

// })


//waitForEnabled({ timeout: })
// it("TC005", async () => {
//     await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
//     var elem = await $('input[type="text"]')
//     await $('button=Enable').click()
//     await elem.waitForEnabled({
//         timeout: 10000
        
//     })
//     console.log('Result: ' + await $('#message').getText())
// })


// it("TC006", async () => {
//     await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')
//     var elem = await $('#finish')
//     await $('button=Start').click()
//     await elem.waitForExist({
//         timeout: 10000
//     })
//     console.log("Result: " + await $('#finish').$('<h4 />').getText())

// })


it("TC007", async () => {
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')
    await $('button=Start').click()
    var elem = await $('#finish')
    await browser.waitUntil(function () {
        return (elem.isDisplayed())
    }, {
        timeout: 15000,
        timeoutMsg: 'different text expected after 15s',
        interval: 100
    })
    console.log("Result: " + await $('#finish').$('<h4 />').getText())

})















