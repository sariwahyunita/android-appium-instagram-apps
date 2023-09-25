const waitHelper = require('../../helpers/waitHelper');
class PageMessage{
    get tvTitle(){
        return $('id:thread_title');
    }

    async getTitle(){
        return this.tvTitle.getAttribute('text');
    }

    get etMessage(){
        return $('id:row_thread_composer_edittext');
    }

    async inputMessage(key){
        await waitHelper.waitAndClick(this.etMessage);
        await this.etMessage.setValue(key);
    }

    get btnSent(){
        return $('id:row_thread_composer_button_send');
    }

    async clickSent(){
        await waitHelper.waitAndClick(this.btnSent);
    }

    get flLastMessage(){
        return $("xpath://android.widget.FrameLayout[last()]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[@resource-id='com.instagram.android:id/direct_text_message_text_view']");
    }

    async getLastMessage(){
        return this.flLastMessage.getAttribute('text');
    }

    get btnBack(){
        return $("id:action_bar_button_back");
    }

    async clickBack(){
        await waitHelper.waitAndClick(this.btnBack);
    }

}

module.exports = new PageMessage()