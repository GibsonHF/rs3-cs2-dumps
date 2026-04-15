//
function script18205(int0: int, int1: int): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(1843, 183));
    IF_TRIGGEROP(comp(1843, 183), int0, int1);
    if ((CC_FINDBYCATEGORY(comp(1843, 183), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}