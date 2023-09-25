const waitHelper = require('../../helpers/waitHelper');
class PageDetailAccount{
    get tvActionBarTitle(){
        return $('id:action_bar_title');
    }

    async getUsernameAccount(){
        return this.tvActionBarTitle.getAttribute('text');
    }

    get btnFollow(){
        return $('id:profile_header_follow_button');
    }

    async clickFollow(){
        await waitHelper.waitAndClick(this.btnFollow);
    }

    async getStatusFollow(){
        return this.btnFollow.getAttribute('text');
    }

    get btnUnfollow(){
        return $('id:follow_sheet_unfollow_row');
    }

    async clickUnfollow(){
        await waitHelper.waitAndClick(this.btnUnfollow);
    }

    get btnMessage(){
        return $("xpath://android.widget.Button[@text='Message']");
    }

    async clickMessage(){
        await waitHelper.waitAndClick(this.btnMessage);
    }

}

module.exports = new PageDetailAccount()