//
function script18996(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    [int0, int1, int2] = script18988(12);
    if ((CC_FIND(122552336, 12) == 1)) {
        int3 = CC_GETGRAPHIC();
        if ((int3 != int1)) {
            CC_SETGRAPHIC(int1);
        };
        if (((int1 == int2) && (CC_FIND[1](122552337, 12) == 1))) {
            CC_SETGRAPHIC[1](-1);
            CC_SETONMOUSEOVER[1](callback());
            CC_SETONMOUSELEAVE[1](callback());
        };
    };
    return;
}