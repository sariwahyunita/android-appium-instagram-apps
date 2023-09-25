const waitHelper = require('../../helpers/waitHelper');
class NavBar{
    get buttonHome(){
        return $('id:feed_tab');
    }

    async clickButtonHome(){
        await waitHelper.waitAndClick(this.buttonHome);;
    }

    get buttonSearch(){
        return $('id:search_tab');
    }

    async clickButtonSearch(){
        await waitHelper.waitAndClick(this.buttonSearch);;
    }

    get buttonCreation(){
        return $('id:creation_tab');
    }

    async clickButtonCreation(){
        await waitHelper.waitAndClick(this.buttonCreation);;
    }

    get buttonReels(){
        return $('id:clips_tab');
    }

    async clickButtonReels(){
        await waitHelper.waitAndClick(this.buttonReels);;
    }

    get buttonProfile(){
        return $('id:profile_tab');
    }

    async clickButtonProfile(){
        await waitHelper.waitAndClick(this.buttonProfile);;
    }
}

module.exports = new NavBar()