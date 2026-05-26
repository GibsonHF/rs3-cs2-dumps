//
function script18696(int0: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), 54263810);
    IF_TRIGGEROP(54263810, int0, 1);
    if ((CC_FINDBYCATEGORY(54263810, UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}