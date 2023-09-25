const NavBar = require('../pageobjects/navbar.js');
const pageSearch = require('../pageobjects/pageSearch.js');
const pageDetailAccount = require('../pageobjects/pageDetailAccount.js');
const pageMessage = require('../pageobjects/pageMessage.js');
const { delay } = require('../../helpers/delayHelper.js');


describe('Test Suite Instagram', () => {
    it.skip('seacrh account sanbercode', async () => {
        let username = 'learnqabot';
        await NavBar.clickButtonSearch();
        await pageSearch.inputFieldSearch(username);
        let searchKeywordTitle = await pageSearch.getSearchKeywordTitle();
        await expect(searchKeywordTitle).toContain(username);
        await pageSearch.clickFirstCardResultSearch();
        let BarTitle = await pageDetailAccount.getUsernameAccount();
        await expect(searchKeywordTitle).toContain(username);
    });

    it('follow account', async () => {
        let username = 'learnqabot';
        await NavBar.clickButtonSearch();
        await pageSearch.inputFieldSearch(username);
        let searchKeywordTitle = await pageSearch.getSearchKeywordTitle();
        await expect(searchKeywordTitle).toContain(username);
        await pageSearch.clickFirstCardResultSearch();
        let BarTitle = await pageDetailAccount.getUsernameAccount();
        await expect(BarTitle).toContain(username);
        let statusFollow = await pageDetailAccount.getStatusFollow();
        if(statusFollow == 'Following'){
            await pageDetailAccount.clickFollow();
            await pageDetailAccount.clickUnfollow();
        }
        await pageDetailAccount.clickFollow();
        statusFollow = await pageDetailAccount.getStatusFollow();
        await expect(statusFollow).toContain('Following');
    });

    it.skip('unfollow account', async () => {
        let username = 'learnqabot';
        await NavBar.clickButtonSearch();
        await pageSearch.inputFieldSearch(username);
        let searchKeywordTitle = await pageSearch.getSearchKeywordTitle();
        await expect(searchKeywordTitle).toContain(username);
        await pageSearch.clickFirstCardResultSearch();
        let BarTitle = await pageDetailAccount.getUsernameAccount();
        await expect(BarTitle).toContain(username);
        let statusFollow = await pageDetailAccount.getStatusFollow();
        if(statusFollow == 'Follow'){
            await pageDetailAccount.clickFollow();
        }
        await pageDetailAccount.clickFollow();
        await pageDetailAccount.clickUnfollow();
        statusFollow = await pageDetailAccount.getStatusFollow();
        await expect(statusFollow).toContain('Follow');
    });

    it('sent message', async () => {
        let username = 'learnqabot';
        let message = 'This message is sent automatically';
        await NavBar.clickButtonSearch();
        await pageSearch.inputFieldSearch(username);
        let searchKeywordTitle = await pageSearch.getSearchKeywordTitle();
        await expect(searchKeywordTitle).toContain(username);
        await pageSearch.clickFirstCardResultSearch();
        let BarTitle = await pageDetailAccount.getUsernameAccount();
        await expect(BarTitle).toContain(username);
        await pageDetailAccount.clickMessage();
        let HeaderTitle = await pageMessage.getTitle();
        await expect(HeaderTitle).toContain(username);
        await pageMessage.inputMessage(message);
        await pageMessage.clickSent();
        await delay(5000)
        let lastMessage = await pageMessage.getLastMessage();
        await expect(lastMessage).toContain(message);
        await pageMessage.clickBack();
    });
});