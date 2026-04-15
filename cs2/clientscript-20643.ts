//
function script20643(int0: int): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(1498, 7));
    IF_TRIGGEROP(comp(1498, 7), int0, 1);
    if ((CC_FINDBYCATEGORY(comp(1498, 7), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}