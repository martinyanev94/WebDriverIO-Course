describe('Test example', () => {
    it("Parallel", async() => {
        await browser.url('https://the-internet.herokuapp.com/')
        await browser.pause(1000)
        console.log('Execution')
    })
})
