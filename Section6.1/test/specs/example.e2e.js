
describe('Test Suite', () => {
    it ('TC001', async () => {
        await browser.url('https://run.plnkr.co/plunks/RpYnoSbkkHidZO8d/')
        await $('button=Proceed').click()
        console.log(await $('#heading').getTextWrong())
        console.log(await $('#container').shadow$('#inside').getText())
    })


    it ('TC002', async () => {
        await browser.url('https://google.com')
        console.log(await browser.getPageSource())


    })


    it ('TC003', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').addValue("standard_user")
        var elem = await browser.getActiveElement()
        console.log(await $(elem).getTagName())
        await expect(elem).toBeDisabled()

    })



    xit ('TC004', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        console.log("Disabled property is: " + await $('#username').getProperty('disabled'))
        console.log(" Attribute is: " + await $('#username').getAttribute('type'))
        console.log(" CSS Property is: " + await $('#username').getCSSProperty('font-weight'))
    })

    it ('TC005', async () => {
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').getTagName()
    })

})

describe('Test Suite Two', () => {
    it ('TC006', async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        const logo_img = await $('<wrong_tag>')
        const location = await logo_img.getLocation()
        await browser.maximizeWindow()
        console.log('Location: ' + await location)

        const logo_x = await logo_img.getLocation('x')
        console.log('Location X: ' + await logo_x)
        const logo_y = await logo_img.getLocation('y')
        console.log('Location Y: ' + await logo_y)
    })



    it ('TC007', async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        const logo = await $('<img>')
        const size = await logo.getSize()
        const width = await logo.getSize('width')
        console.log("Width: "+ await width)
        const height = await logo.getSize('height')
        console.log("Height: "+ await height)
    })



    it ("TC008", async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        console.log("img HTML is: " + await $('<img>').getHTML())
    })

})




