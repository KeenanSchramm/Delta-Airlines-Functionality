let delta = {}
module.exports = {
    beforeEach: browser => {
        delta = browser.page.deltaPage()
        delta.navigate()
    },
    // after: browser => {
    //     browser.end()
    // },
    'Test1': browser => {
        flight1.forEach(flight => {
            delta
                .resizeWindow(1280, 1000)
                .pause(500)
                .departArriveAirport(flight)
                .pause(500)
                .tripData(flight)
                .pause(500)
                .finishFill(flight)
                .pause(1000)
                .end()
        })
    },
    'Test2': browser => {
        flight2.forEach(flight => {
            delta
                .resizeWindow(1280, 1000)
                .pause(500)
                .departArriveAirport(flight)
                .pause(500)
                .tripData(flight)
                .pause(500)
                .finishFill(flight)
                .pause(1000)
                .end()
        })
    }

}