//
function script20643(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), 98172935);
    IF_TRIGGEROP(98172935, int0, 1);
    if ((CC_FINDBYCATEGORY(98172935, UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}