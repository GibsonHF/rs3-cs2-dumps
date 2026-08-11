//
function script20643(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(1498, 7));  // marketplace_store:item_triggerop_layer
    IF_TRIGGEROP(comp(1498, 7), int0, 1);  // marketplace_store:item_triggerop_layer
    if ((CC_FINDBYCATEGORY(comp(1498, 7), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {  // marketplace_store:item_triggerop_layer
        CC_DELETE();
    };
    return;
}