// it("TC001", async () => {
//     await browser.url("https://the-internet.herokuapp.com/dynamic_loading/2")
//     var elem = await $('#finish')
//     await $('button=Start').click()
//     console.log("Check for finish element after the Start is clicked")
//     console.log(await elem.isExisting())
//     await browser.pause(10000)
//     var elem = await $('#finish')
//     console.log("Check completed")
//     console.log(await elem.isExisting())
// })

// toExist()
// it("TC002", async () => {
//     await browser.url("https://the-internet.herokuapp.com/dynamic_loading/2")
//     var elem = await $('#finish')
//     await expect(elem).toBeExisting() //assertion
//     await browser.pause(10000)
//     var elem = await $('#finish')
//     await expect(elem).toBeExisting() 
// })

// it("TC003", async () => {
//     await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
//     var elem = await $('input[type="text"]')
//     console.log("Check if Enabled before Click")
//     console.log(await elem.isEnabled())
//     await $('button=Enable').click()
//     await browser.pause(5000)
//     var elem = await $('input[type="text"]')
//     console.log("Check if Enabled after Click")
//     console.log(await elem.isEnabled())
// })


// it("TC004", async () => {
//     await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
//     var elem = await $('input[type="text"]')
//     console.log("Check if Enabled before Click")
//     await expect(elem).toBeDisabled()
//     await $('button=Enable').click()
//     await browser.pause(5000)
//     var elem = await $('input[type="text"]')
//     console.log("Check if Enabled after Click")
//     await expect(elem).toBeDisabled()
// })


// it("TC004", async () => {
//     await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
//     await $('button=Start').click()
//     var elem = await $('#finish')
//     console.log("After Clicking Start")
//     console.log(await elem.isDisplayed())
//     await browser.pause(7000)
//     console.log("After Clicking Start + 7 sec")
//     console.log(await elem.isDisplayed())

// })


// it("TC005", async () => {
//     await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
//     var elem = await $('#finish')
//     console.log("After Clicking Start")
//     await expect(elem).toBeDisplayed()

// })

// it("TC006", async () => {
//     await browser.url("https://the-internet.herokuapp.com/")
//     var elem = await $('=WYSIWYG Editor')
//     await expect(elem).toBeDisplayedInViewport()
// })

// it("TC007", async () => {
//     await browser.url("https://the-internet.herokuapp.com/checkboxes")
//     var box1 = await $$('input[type="checkbox"]')[0]
//     console.log("Verify first checkbox")
//     console.log(await box1.isSelected())
//     var box2 = await $$('input[type="checkbox"]')[1]
//     console.log("Verify second checkbox")
//     console.log(await box2.isSelected())
// })


// it("TC008", async () => {
//     await browser.url("https://the-internet.herokuapp.com/checkboxes")
//     var box1 = await $$('input[type="checkbox"]')[0]
//     console.log("Verify first checkbox")
//     await expect(box1).toBeChecked()
// })

it("TC009", async () => {
    await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")
    var btn = await $("button=Start")
    console.log("Check if clickable")
    await expect(btn).toBeClickable()
})
