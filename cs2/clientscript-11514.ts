//
function script11514(int0: component, int1: component, int2: int, int3: int, int4: int, int5: unknown_int): int {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    var int6 = (10 + (40 * MODULO(int2, 8)));
    var int7 = (10 + (int4 * (int2 / 8)));
    CC_SETPOSITION(int6, int7, 0, 0);
    CC_SETSIZE(20, 20, 0, 0);
    var int8 = IF_GETNEXTSUBID(int1);
    var int9 = int3;
    var int10 = 0;
    var int11 = 21363;
    if ((int3 == 16777215)) {
        CC_SETOP(1, "Choose");
        CC_SETONMOUSEREPEAT(callback(script8799, "Choose", int1, int8));
    } else {
        CC_SETOP(1, "Select");
        CC_SETONMOUSEREPEAT(callback(script8799, "Select", int1, int8));
        CC_SETOP(2, "Change");
    };
    if ((int9 == varclient_4888)) {
        int10 = 1;
        int11 = 28303;
    } else {
        CC_SETONMOUSEREPEAT(callback(script11516, int1, int8, int9, 29006));
        CC_SETONMOUSELEAVE(callback(script11516, int1, int8, int9, 21363));
    };
    CC_SETONVARCTRANSMIT(callback(script11518, int0, CC_GETID(), int1, int8, int9, int10, 1, 4888, 1));
    var int2 = (int2 + 1);
    script10764(int1, int11, (int6 - 4), (int7 - 4), 28, 28, -1);
    int8 = IF_GETNEXTSUBID(int1);
    if ((int3 == 16777215)) {
        CC_CREATE(int1, 5, int8);
        CC_SETGRAPHIC(25460 as graphic);
    } else {
        CC_CREATE(int1, 3, int8);
        CC_SETCOLOUR(HSVTORGB(int3));
        CC_SETFILL(1);
    };
    CC_SETPOSITION(int6, int7, 0, 0);
    CC_SETSIZE(20, 20, 0, 0);
    int8 = (int8 + 1);
    return int2;
}