//
function script7957(int0: int, int1: int, int2: int, int3: int): void {
    if ((IF_GETHIDE(comp(1422, 34)) == true)) {
        return;
    };
    var int4 = comp(1422, 38);
    CC_DELETEALL(int4);
    var int5 = 0;
    CC_CREATE(int4, 3, int5);
    int5 = (int5 + 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETFILL(1);
    CC_SETCOLOUR(0);
    CC_SETTRANS(255);
    var int6 = WORLDMAP_GETCURRENTMAP();
    if ((int6 == -1 as maparea)) {
        return;
    };
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    [int7, int8, int9, int10] = WORLDMAP_GETCONFIGBOUNDS(WORLDMAP_GETCURRENTMAP());
    var int11 = (int9 - int7);
    var int12 = (int10 - int8);
    var int13 = SCALE(int11, IF_GETWIDTH(int4), 16384);
    var int14 = SCALE(int12, IF_GETHEIGHT(int4), 16384);
    if ((int14 < int13)) {
        int14 = SCALE(int14, int13, 16384);
        int13 = 16384;
    } else {
        int13 = SCALE(int13, int14, 16384);
        int14 = 16384;
    };
    CC_CREATE(int4, 3, int5);
    int5 = (int5 + 1);
    CC_SETSIZE(int13, int14, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETFILL(1);
    CC_SETCOLOUR(16777215);
    CC_SETTRANS(255);
    var int15 = SCALE(int2, (int11 * 512), CC_GETWIDTH());
    var int16 = SCALE(int3, (int12 * 512), CC_GETHEIGHT());
    var int17 = SCALE((int0 - (int7 * 512)), (int11 * 512), CC_GETWIDTH());
    var int18 = SCALE(((int10 * 512) - int1), (int12 * 512), CC_GETHEIGHT());
    int17 = (int17 + CC_GETX());
    int18 = (int18 + CC_GETY());
    CC_CREATE(int4, 3, int5);
    int5 = (int5 + 1);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(int17, int18, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(16711680);
    CC_SETTRANS(200);
    CC_CREATE(int4, 3, int5);
    int5 = (int5 + 1);
    CC_SETSIZE(int15, int16, 0, 0);
    CC_SETPOSITION(int17, int18, 0, 0);
    CC_SETFILL(0);
    CC_SETCOLOUR(16711680);
    return;
}