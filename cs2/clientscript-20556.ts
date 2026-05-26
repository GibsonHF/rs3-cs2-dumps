//
function script20556(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), 55902218);
    IF_TRIGGEROP(55902218, int0, 1);
    if ((CC_FINDBYCATEGORY(55902218, UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}