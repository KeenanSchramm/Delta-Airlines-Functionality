let deltaCommands = {
    departArriveAirport: function (data) {
        this
            .click('@fromAirport')
            .setValue('@cityInput', data.from)
            .waitForElementPresent('@searchExample')
            .click('@searchExample')
            .click('@toAirport')
            .setValue('@cityInput', data.to)
            .click('@searchExample')
            .verify.containsText('@fromAirport', data.from)
            .verify.containsText('@toAirport', data.to)
        return this
    },
    tripData: function (data) {
        this
            .click('@tripType')
            .pause(500)
        switch (data.trip) {
            case '@roundTrip':
                this
                    .click('@roundTrip')
                    .click('@departReturn')
                    .useXpath()
                    .click(`//a[@aria-label="${data.departDate}"]`)
                    .click(`//a[@aria-label="${data.returnDate}"]`)
                break
            case '@oneWay':
                this
                    .click('@oneWay')
                    .click('@departReturn')
                    .useXpath()
                    .click(`//a[@aria-label="${data.departDate}"]`)
                break
        }


        return this
    },

    finishFill: function (data) {
        this
            .click('@passengerList')
            .pause(500)
            .click(data.passengers)
            .pause(500)
            //otherstuff
            .click('@advSearch')
        switch (data.price) {
            case '@shopWithMileschk':
                this
                    .click(data.price)
                break
            case 'cash':
                this
                break
        }
        this
            .click('@fareList')
            .pause(500)
            .click(data.fare)
            .verify.containsText('@fareList', data.fareVer)
            .pause(500)
            .click('@submitButton')
            .pause(10000)
        switch (data.price) {
            case '@shopWithMileschk':
                this
                    .verify.containsText('@selectedDate', data.priceVer)
                    .moveToElement('@exactMatch', 10, 10)
                    .verify.containsText('@exactMatch', data.priceVer2)
                //     if () {
                //         this
                //         .verify.containsText('@selectedDate', data.priceVer)
                //     } else{
                //         this
                //         .moveToElement('@exactMatch', 10, 10)
                //         .verify.containsText('@exactMatch', data.priceVer)

                //     }
                break
            case 'cash':
                this
                    .pause(5000)
                    .waitForElementPresent('@cashCell')
                    .verify.containsText('@cashCell', data.priceVer)
        }
        return this

            .pause(1000)
    }
}


module.exports = {
    url: 'https://www.delta.com',
    commands: [deltaCommands],
    var: flight1 = [
        {
            from: 'SGU',
            to: 'SLC',
            trip: '@roundTrip',
            departDate: '26 September 2019, Thursday',
            returnDate: '27 September 2019, Friday',
            passengers: '@passengers2',
            price: '@shopWithMileschk',
            priceVer: "MILES",
            priceVer2:"Miles",
            fare: '@mainCabin',
            fareVer: "Main Cabin"

        }],
    var: flight2 = [
        {
            from: 'AUS',
            to: 'NYC',
            trip: '@oneWay',
            departDate: '24 September 2019, Tuesday',
            // returnDate: '30 September 2019, Monday',
            passengers: '@passengers1',
            price: 'cash',
            priceVer: "$",
            fare: '@firstClass',
            fareVer: "First Class"

        }],
    elements: {
        //general elements
        fromAirport: {
            selector: '//a[@id="fromAirportName"]/span[@class="airport-code d-block"]',
            locateStrategy: 'xpath'
        },
        toAirport: {
            selector: '//a[@id="toAirportName"]/span[@class="airport-code d-block"]',
            locateStrategy: 'xpath'
        },
        cityInput: {
            selector: '//input[@id="search_input"]',
            locateStrategy: 'xpath'
        },
        searchExample: {
            selector: '//span[@class="airport-code col-sm-2 col-md-1 col-lg-2 col-xl-2 col-xxl-2 pl-0 pr-3"]',
            locateStrategy: 'xpath'
        },
        tripType: {
            selector: '//span[@aria-owns="selectTripType-desc"]',
            locateStrategy: 'xpath'
        },
        departReturn: {
            selector: '//div[@aria-describedby="calDepartLabelCont calReturnLabelCont"]',
            locateStrategy: 'xpath'
        },
        return: {
            selector: '//div[@id="input_returnDate_1"]',
            locateStrategy: 'xpath'
        },
        doneButton: {
            selector: '//button[@class="donebutton"]',
            locateStrategy: 'xpath'
        },
        passengerList: {
            selector: '//span[@aria-owns="passengers-desc"]',
            locateStrategy: 'xpath'
        },
        advSearch: {
            selector: '//a[@id="adv-search"]',
            locateStrategy: 'xpath'
        },
        fareList: {
            selector: '//span[@aria-owns="faresFor-desc"]',
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: '//button[@id="btnSubmit"]',
            locateStrategy: 'xpath'
        },
        selectedDate: {
            selector: '//td[@class="forHover selectedCell ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        exactMatch: {
            selector: '//td[@class="forHover exactMatchCell"]',
            locateStrategy: 'xpath'

        },
        cashCell: {
            selector: '(//span[text()="$"])[3]',
            locateStrategy: 'xpath'
        },
        results1: {
            selector: '//div[@class="container containerCustom ng-star-inserted"]',
            locateStrategy: 'xpath'
        },
        
        //flight data selectors
        roundTrip: {
            selector: '//li[@id="ui-list-selectTripType0"]',
            locateStrategy: 'xpath'
        },
        oneWay: {
            selector: '//li[@id="ui-list-selectTripType1"]',
            locateStrategy: 'xpath'
        },
        passengers2: {
            selector: '//li[@id="ui-list-passengers1"]',
            locateStrategy: 'xpath'
        },
        passengers1: {
            selector: '//li[@id="ui-list-passengers0"]',
            locateStrategy: 'xpath'
        },
        basicEconomy: {
            selector: '//li[@id="ui-list-faresFor0"]',
            locateStrategy: 'xpath'
        },
        mainCabin: {
            selector: '//li[@id="ui-list-faresFor1"]',
            locateStrategy: 'xpath'
        },
        //correct selector?
        firstClass: '#ui-list-faresFor3',
        shopWithMileschk: {
            selector: '//label[@for="shopWithMiles"]',
            locateStrategy: 'xpath'
        },
        miles: {
            selector: '//label[@id="milesLabel"]',
            locateStrategy: 'xpath'
        },
        money: {
            selector: '//label[@id="moneyLabel"]',
            locateStrategy: 'xpath'
        },




        element: {
            selector: 'xpathselector',
            locateStrategy: 'xpath'
        },


    }
}

