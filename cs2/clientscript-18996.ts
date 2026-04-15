//
function script18996(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = 0;
    [int0, int1, int2] = script18988(12);
    if ((CC_FIND(comp(1870, 16), 12) == 1)) {
        int3 = CC_GETGRAPHIC();
        if ((int3 != int1)) {
            CC_SETGRAPHIC(int1);
        };
        if (((int1 == int2) && (CC_FIND[1](comp(1870, 17), 12) == 1))) {
            CC_SETGRAPHIC[1](-1 as graphic);
            CC_SETONMOUSEOVER[1](callback());
            CC_SETONMOUSELEAVE[1](callback());
        };
    };
    return;
}