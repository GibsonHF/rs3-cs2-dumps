//
function script12194(): void {
    IF_SETHIDE(false, comp(1712, 25));
    IF_SETHIDE(false, comp(1712, 43));
    IF_SETHIDE(false, comp(1712, 60));
    script12196(false);
    var int0 = comp(1712, 31);
    CC_DELETEALL(int0);
    var int1 = 0;
    [int1, int1] = script12086(int0, 0, 5, 5, IF_GETWIDTH(int0), "Creating new gizmo...", 32855 as struct);
    var int2 = 0;
    while ((CC_FIND(comp(1712, 36), int2) == 1)) {
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    int2 = 0;
    while ((CC_FIND(comp(1712, 64), int2) == 1)) {
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    return;
}