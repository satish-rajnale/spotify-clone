const index = require("./index")
// @ponicode
describe("setupTests.addTwoNumbers", () => {
    test("0", () => {
        let result: any = index.addTwoNumbers(-5.48, 0)
        expect(result).toBe(-5.48)
    })
})

// @ponicode
describe("index.getPersonname", () => {
    test("0", () => {
        let result: any = index.getPersonname({ name: "George" })
        expect(result).toBe("George")
    })
})

// @ponicode
describe("index.getAsyncName", () => {
    test("0", async () => {
        let result: any = await index.getAsyncName({ name: "Edmond" })
        expect(result).toBe("Edmond")
    })
})

// @ponicode
describe("index.getNameBypromise", () => {
    test("0", async () => {
        let result: any = await index.getNameBypromise({ name: "George" })
        expect(result).toBe("George")
    })
})

// @ponicode
describe("index.getNameCallback", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.getNameCallback(12, false)
        }
    
        expect(callFunction).toThrow('callback is not a function')
    })
})
