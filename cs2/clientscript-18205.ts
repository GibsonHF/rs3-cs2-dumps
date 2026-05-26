//
function script18205(int0: number, int1: number): void {
    IF_CREATECHILD(4, UI_GETCATEGORY(int0), UI_GETDYNID(int0), 120783031);
    IF_TRIGGEROP(120783031, int0, int1);
    if ((CC_FINDBYCATEGORY(120783031, UI_GETCATEGORY(int0), UI_GETDYNID(int0)) == 1)) {
        CC_DELETE();
    };
    return;
}