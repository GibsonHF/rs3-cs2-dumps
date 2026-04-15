//
function script9948(int0: int, int1: int, int2: unknown_int): void {
    if ((script9947() == 1)) {
        return;
    };
    var int3 = script10405(int0);
    var int4 = script8418(int3, 0);
    var int5 = struct_getparam(int3, 3503);
    var int6 = script1886(int0);
    var int7 = 0;
    var int8 = 0;
    [int7, int8] = script8405(IF_GETPARENTLAYER(int5));
    var int9 = IF_GETHEIGHT(int5);
    var int10 = IF_GETY(int5);
    var int11 = 0;
    var int12 = 0;
    var int13 = 189;
    [int11, int12] = script8405(int6);
    int11 = (int11 - int7);
    int12 = (int12 - int8);
    int10 = (int1 - int8);
    int9 = ((IF_GETHEIGHT(int5) + IF_GETY(int5)) - int10);
    if ((int9 < int13)) {
        int10 = (int10 - (int13 - int9));
        int9 = int13;
    };
    var int14 = MIN(600, ((int12 + IF_GETHEIGHT(int6)) - int9));
    int10 = MAX(int12, MIN(int10, int14));
    int9 = MIN(int9, IF_GETHEIGHT(int6));
    if ((int2 == 1)) {
        if ((int9 < 189)) {
            int9 = 189;
            varclient_1037 = 189;
        } else {
            varclient_1037 = int9;
        };
    };
    script9949(int9, int2);
    return;
}