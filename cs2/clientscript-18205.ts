//
function script18205(int0: number, int1: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(1843, 183));  // mtxmgt_store:items_layer
    IF_TRIGGEROP(comp(1843, 183), int0, int1);  // mtxmgt_store:items_layer
    if ((CC_FINDBYCATEGORY(comp(1843, 183), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {  // mtxmgt_store:items_layer
        CC_DELETE();
    };
    return;
}