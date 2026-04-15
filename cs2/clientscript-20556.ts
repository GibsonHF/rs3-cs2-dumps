//
function script20556(int0: int): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(853, 10));
    IF_TRIGGEROP(comp(853, 10), int0, 1);
    if ((CC_FINDBYCATEGORY(comp(853, 10), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}