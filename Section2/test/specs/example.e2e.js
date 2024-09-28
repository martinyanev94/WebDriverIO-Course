// describe('Webdriver.io examples', () => {
//     it('TC0_My First Test Case', async() => {
//         await browser.url('https://www.google.com/')
//         await expect(browser).toHaveTitle('Google')
//     })})


// it("TC001", async () => {
//     await browser.url('https://ultimateqa.com/complicated-page')
//     await browser.pause(3000)
//     await $('.et_pb_menu__logo').saveScreenshot('./Screenshots/TTC001.png')
// })

// it('TC002', async () => {
//     await browser.url('https://www.saucedemo.com')
//     await $('#user-name').saveScreenshot('./Screenshots/TTC002.png')
// })

// it('TC003', async () => {
//     await browser.url('https://jqueryui.com/')
//     await $('.projects').saveScreenshot('./Screenshots/TTC003.png')
// })

// it('TC004', async () =>{
//     await browser.url('https://ultimateqa.com/complicated-page/')
//     await $('[name="et_builder_submit_button"]').saveScreenshot('./Screenshots/TTC004.png')

// })


// it('TC005', async () => {
//     await browser.url('https://google.com/')
//     await $('<img>').saveScreenshot('./Screenshots/TTC005.png')

// })


// it('TC006', async () =>{
//     await browser.url('https://ultimateqa.com/complicated-page/')
//     await $('*=Media').saveScreenshot('./Screenshots/TTC006.png')
// })

// ID class name


// it('TC007', async () =>{
//     await browser.url('https://google.com/preferences')
//     await $('div[class="goog-inline-block jfk-button jfk-button-action"]').saveScreenshot('./Screenshots/TTC007.png')
    
// })

// it('TC008', async () =>{
//     await browser.url('https://google.com')
//     await $('//input[@id="gbqfbb"]').saveScreenshot('./Screenshots/TTC008.png')

// })


// it('TC009', async () => {
//     await browser.url("https://amazon.com")
//     await $(() => document.getElementById('nav-xshop-container')).saveScreenshot('./Screenshots/TTC009.png')
// })

// it('TC010', async () => {
//     await browser.url('https://ultimateqa.com/filling-out-forms')
//     await $('.et_pb_contact_form.clearfix').$('#et_pb_contact_name_0').saveScreenshot('./Screenshots/TTC010.png')
// })


it('TC011', async () =>{
    await browser.url('https://ahfarmer.github.io/calculator/')
    const appWrapper = await $('div#root')

    await browser.react$('t', {
        props: { name: "7"}
    }).click()
    await browser.react$('t', {
        props: { name: 'x'}
    }).click()
    await browser.react$('t', {
        props: { name: '6'}
    }).click()
    await browser.react$('t', {
        props: { name: '='}
    }).click()

    console.log(await $('.component-display').getText());
    

})













































