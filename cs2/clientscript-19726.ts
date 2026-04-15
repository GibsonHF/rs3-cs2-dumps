//
function script19726(int0: component, int1: obj, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: unknown_int): void {
    var int10 = 0;
    CC_DELETEALL(int0);
    var int11 = -1 as graphic;
    if ((int9 == 0)) {
        int11 = script8948(int4);
    } else {
        int11 = script227(int4);
    };
    var int12 = SCALE(82, 100, int5);
    var int13 = SCALE(100, 100, int5);
    if ((int4 != 7)) {
        script7917(int0, int10++, 0, 0, 1, 1, int12, int13, 0, 0, int11, false, false, false, 0);
    } else {
        int10 = (int10 + (script16707(int0, int4, int11, int10++, 0, 0, 1, 1, int12, int13, 0, 0, int9) + 1));
    };
    var int14 = SCALE(36, 100, int5);
    var int15 = SCALE(32, 100, int5);
    if ((int1 != -1 as obj)) {
        script9802(int0, int10++, 1, 0, 1, 1, int14, int15, 0, 0, int1, int2, 0, 0);
    };
    if ((int3 < 2)) {
        return;
    };
    var int16 = script10980(int3);
    var int6 = SCALE(int6, 100, int5);
    var int7 = SCALE(int7, 100, int5);
    var int8 = SCALE(int8, 100, int5);
    script7917(int0, int10++, int7, int8, 1, 1, int6, int6, 0, 0, int16, false, false, false, 0);
    return;
}