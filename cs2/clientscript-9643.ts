//
function script9643(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: unknown_int): void {
    var int8 = script8101();
    if ((WORLDMAP_ISLOADED() == 0)) {
        return;
    };
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    [int9, int10] = WORLDMAP_GETSIZE();
    if ((((int5 == int9) && (int6 == int10)) && (int7 == 1))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if (((int5 == int9) && (int6 == int10))) {
        IF_SETONTIMER(callback(script9643, int0, int1, int2, int3, int4, int9, int10, 1), int0);
        return;
    };
    IF_SETONTIMER(callback(script9643, int0, int1, int2, int3, int4, int9, int10, 0), int0);
    [int15, int16] = [IF_GETWIDTH(int8), IF_GETHEIGHT(int8)];
    if (((int9 > 0) && (int10 > 0))) {
        [int11, int12] = WORLDMAP_GETDISPLAYPOSITION();
        [int17, int18] = [SCALE(int9, int15, int1), SCALE(int10, int16, int2)];
        int13 = (int3 - int17);
        int14 = (int4 + int18);
        if ((int13 < 0)) {
            int13 = 0;
        };
        if ((int14 < 0)) {
            int14 = 0;
        };
        WORLDMAP_JUMPTODISPLAYCOORD(MOVECOORD(pos(0,0,0,0,0), int13, 0, int14));
    };
    return;
}