
// it ('TC001', async () => {
//     await browser.url('https://the-internet.herokuapp.com/inputs')
//     var inputB = await $('input[type="number"]')
//     console.log("Not checked")
//     await inputB.click()
//     await expect(inputB).toBeFocused()
//     // await browser.pause(3000)
//     // await inputB.click()
//     // console.log("Checked")
//     // console.log(await inputB.isFocused())
//     // await browser.pause(3000)


// })



// it ('TC002', async () => {
//     await browser.url('https://the-internet.herokuapp.com/status_codes')
//     var elem = await $('=200')
//     await expect(elem).toHaveAttr('href', 'status_odes/200')
// })


// toHaveAttributeContaining()

// it ('TC003', async () => {
//     await browser.url('https://the-internet.herokuapp.com/broken_images')
//     var image = await $$('<img>')[3]
//     await expect(image).toHaveAttributeContaining('sr','.jpg')

// })


// it ('TC004', async () => {
//     await browser.url('https://the-internet.herokuapp.com/')
//     var heading = await $('<h1>')
//     await expect(heading).toHaveClass('heading', {
//         message: 'Not a heading class',
//     })
// })

// it ('TC005', async () => {
//     await browser.url('https://the-internet.herokuapp.com/jqueryui/menu')
//     var menu = await $('#menu')
//     await expect(menu).toHaveClassContaining('ui-wi')

// })

// it ('TC006', async () => {
//     await browser.url('https://the-internet.herokuapp.com/broken_images')
//     var elem = await $$('<img>')[3]
//     await expect(elem).toHaveElementProperty('width', 110)
    
// })

// it ('TC007', async () => {
//     await browser.url('https://jqueryui.com/')
//     var elem = await $('option[value="https://jqueryui.com/demos/"]')
//     await expect(elem).toHaveValue('https://jqueryui.com/', {
//         ignoreCase:true
//     })
// })
//toHaveLink toHaveHref
// it ('TC008', async () => {
//     await browser.url('https://jqueryui.com/')
//     var elem = await $('=demos')
//     await expect(elem).toHaveLink('/demos/')
// })

// it ('TC009', async () => {
//     await browser.url('https://the-internet.herokuapp.com/')
//     const text = await $('<h1>')
//     await expect(text).toHaveTextContaining('Welcome to ')

// })



//toBeElementsArrayOfSize( {gte:10})
// it ('TC0010', async () => {
//     await browser.url('https://the-internet.herokuapp.com/broken_images')
//     const elem = await $$('<img>')
//     await expect(elem).toBeElementsArrayOfSize({
//         gte: 4
//     })
// })

// Project 1: HR Application

// it("HR_TC001", async () => {
//     await browser.url('https://opensource-demo.orangehrmlive.com/')
//     await $('[name="username"]').setValue('Admin')
//     await $('[name="password"]').setValue('admin123')
//     await $('.orangehrm-login-button').click()
//     var logo = await $('img[src*="logo"]')
//     await expect(logo).toHaveAttribute('alt', 'client brand banner')
    
// })


// it("HR_TC002", async () => {
//     await browser.url('https://opensource-demo.orangehrmlive.com/')
//     await $('[name="username"]').setValue('Admin')
//     await $('[name="password"]').setValue('admin123')
//     await $('.orangehrm-login-button').click()
//     var logo = await $('img[src*="logo"]')
//     await expect(logo).toHaveElementProperty('width', 182)

// })

// it("HR_TC003", async () => {
//     await browser.url('https://opensource-demo.orangehrmlive.com/')
//     await $('[name="username"]').setValue('Admin')
//     await $('[name="password"]').setValue('admin123')
//     await $('.orangehrm-login-button').click()
//     await $('[title="Assign Leave"]').moveTo()
//     await $('[title="Assign Leave"]').click()
//     await $('.oxd-autocomplete-wrapper').click()
//     await browser.keys("John Smith")
//     await $('.oxd-select-wrapper').click()
//     if (await $('.oxd-select-wrapper').isExisting()) {
//         await browser.keys("\uE015")
//         await browser.keys("\uE015")
//         await browser.keys("\uE015")
//         await browser.keys("\uE015")
//         await browser.keys("\uE007") //Enter
//         await browser.pause(3000)
//         var leavetype = await $('.oxd-select-wrapper')
//         await expect(leavetype).toHaveTextContaining('CAN')
//     }
// })





















