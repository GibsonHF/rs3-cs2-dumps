//
function script18696(int0: int): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), comp(828, 2));
    IF_TRIGGEROP(comp(828, 2), int0, 1);
    if ((CC_FINDBYCATEGORY(comp(828, 2), UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}