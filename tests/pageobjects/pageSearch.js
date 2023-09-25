const waitHelper = require('../../helpers/waitHelper');
class PageSearch{
    //field Search 
    get fieldSearch(){
        return $('id:action_bar_search_edit_text');
    }

    async clickfieldSearch(){
        await waitHelper.waitAndClick(this.fieldSearch);
    }

    async inputFieldSearch(key){
        await waitHelper.waitAndClick(this.fieldSearch);
        await this.fieldSearch.setValue(key);
    }

    get rowSearchKeywordTitle(){
        return $('id:row_search_keyword_title');
    }

    async getSearchKeywordTitle(){
        return this.rowSearchKeywordTitle.getAttribute('text');
    }

    get firstCardResultSearch(){
        return $("xpath://android.widget.FrameLayout[@resource-id='com.instagram.android:id/row_search_user_container'][1]");
    }

    async clickFirstCardResultSearch(){
        await waitHelper.waitAndClick(this.firstCardResultSearch);
    }
}

module.exports = new PageSearch()