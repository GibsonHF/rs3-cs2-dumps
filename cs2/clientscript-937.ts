//
function script937(): void {
    CC_DELETEALL(21954576);
    var int0 = 0;
    var int1 = 0;
    var int2 = 4;
    var int3 = 7;
    if ((IF_GETSCROLLWIDTH(21954576) > 0)) {
        int0 = ((IF_GETSCROLLWIDTH(21954576) - (36 * int2)) / (int2 - 1));
    } else {
        int0 = ((IF_GETWIDTH(21954576) - (36 * int2)) / (int2 - 1));
    };
    if ((IF_GETSCROLLHEIGHT(21954576) > 0)) {
        int1 = ((IF_GETSCROLLHEIGHT(21954576) - (32 * int3)) / (int3 - 1));
    } else {
        int1 = ((IF_GETHEIGHT(21954576) - (32 * int3)) / (int3 - 1));
    };
    var int4 = 0;
    var int5 = -1;
    while ((int4 < INV_SIZE(90))) {
        CC_CREATE(21954576, 3, int4);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((36 + int0) * MODULO(int4, int2)), ((int4 / int2) * (32 + int1)), 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(16711680);
        CC_SETTRANS(255);
        int4 = (int4 + 1);
    };
    IF_SETONINVTRANSMIT(callback(script938, 90, 1), 21954576);
    return;
}