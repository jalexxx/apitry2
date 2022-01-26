let api = require('../static/js/apiHelpers');
let helpers = require('../static/js/helpers');

jest.mock('../static/js/helpers');
global.fetch = require('jest-fetch-mock');

describe('api helpers', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('getData', () => {
        test(`it makes a fetch call to the given user\'s github api url`, () => {
            apiHelpers.getData('getfutureproof')
            expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/getfutureproof')
        })

        test('it calls renderPublicRepoCount on successful request', async () => {
            fetch.mockResponse(JSON.stringify({ "public_repos": 100 }))
            await apiHelpers.getData('gingertonic')
            expect(helpers.renderPublicRepoCount).toHaveBeenCalledWith({ "public_repos": 100 })
        })

        test('it calls renderError on failed request', () => {
            fetch.mockReject(new Error())
            apiHelpers.getData('gingertonic')
            expect(helpers.renderError).toHaveBeenCalled()
        })
    })

})
