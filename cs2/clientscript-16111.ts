//
function script16111(): void {
    if ((script16112() == 0)) {
        return;
    };
    var int0 = script16113();
    if ((int0 == -1 as dbrow)) {
        script15829(0);
        return;
    };
    var string0 = script4010(int0);
    if ((strcmp(string0, "") == 0)) {
        return;
    };
    if ((CC_FIND(comp(662, 48), 0) == 1)) {
        CC_SETTEXT(string0);
    };
    script13785();
    return;
}