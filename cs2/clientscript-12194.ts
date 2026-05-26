//
function script12194(): void {
    IF_SETHIDE(0, 112197657);
    IF_SETHIDE(0, 112197675);
    IF_SETHIDE(0, 112197692);
    script12196(0);
    var int0 = 112197663;
    CC_DELETEALL(int0);
    var int1 = 0;
    [int1, int1] = script12086(int0, 0, 5, 5, IF_GETWIDTH(int0), "Creating new gizmo...", 32855);
    var int2 = 0;
    while ((CC_FIND(112197668, int2) == 1)) {
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    int2 = 0;
    while ((CC_FIND(112197696, int2) == 1)) {
        CC_SETCOLOUR(8421504);
        int2 = (int2 + 1);
    };
    return;
}