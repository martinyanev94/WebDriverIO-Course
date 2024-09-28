const assert = require('chai').assert
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    // it('TC001', async () => {
    //     assert('123' == 123, 'ERROR: Missmatch')
    // })

    // string, numbers not 0, True
    // it('TC002', async () => {
    //     assert.isNotOk(true, "Error:-")
    // })

    // it('TC003', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/')
    //     var elem = await $('<h2>').getText()
    //     assert.equal(elem,'Available Example','ERROR: Mismatch')
    // })

    // it('TC004', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/')
    //     var elem = await $('<h2>').getAttribute('name')
    //     assert.strictEqual(elem,'null','ERROR: Mismatch')
    // })

    // it('TC005', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/')
    //     var elem = await $('<h2>').getText()
    //     assert.notEqual(elem,'Available Examp','ERROR: Mismatch')
    // })

    // it('TC005', async () => {
    //     assert.notStrictEqual(3,'3','ERROR: Mismatch')
    // })

    // it('TC006', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/')
    //     var elem = await $$('<a>').length
    //     assert.isAbove(elem, 100, 'Error: The list of elements should be higher than 100')
    // })

    // it('TC007', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/')
    //     var elem = await $$('<a>')
    //     assert.lengthOf(elem, 46, "ERROR: Unexpected length")
    //     assert.isBelow(elem.length, 100, 'Error: The list of elements should be lower than 100')
    // })

    it('TC008', async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        var elem = await $('<h2>').getText()
        var arr1 = ['blue', 'green', 'yellow']
        assert.isArray(arr1, "ERROR: Not an Array.")
        assert.isString(elem, 'ERROR: Not a string')
        assert.include(arr1, 'blue', "Error: element not in array")
    })






})

