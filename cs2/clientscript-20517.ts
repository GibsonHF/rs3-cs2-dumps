//
function script20517(int0: int): void {
    var int1 = script10405(int0);
    if (((int1 == -1 as struct) || (struct_getparam(int1, 3529) == true))) {
        return;
    };
    var int2 = struct_getparam(int1, 3503);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    var int3 = IF_GETWIDTH(comp(1477, 26));
    var int4 = IF_GETHEIGHT(comp(1477, 26));
    var int5 = IF_GETX(int2);
    var int6 = IF_GETY(int2);
    var int7 = IF_GETWIDTH(int2);
    var int8 = IF_GETHEIGHT(int2);
    var int9 = 0;
    var int10 = 0;
    [int5, int6, int7, int8, int9] = script8382(int5, int6, int7, int8, int0, 0, 1);
    while (((int9 == 0) && (++int10 <= 8))) {
        if ((int8 < int7)) {
            if ((int6 < (int4 / 2))) {
                int6 = (int6 + (int8 * int10));
            } else {
                int6 = (int6 - (int8 * int10));
            };
        } else if ((int5 < (int3 / 2))) {
            int5 = (int5 + (int7 * int10));
        } else {
            int5 = (int5 - (int7 * int10));
        };
        [int5, int6, int7, int8, int9] = script8382(int5, int6, int7, int8, int0, 0, 1);
    };
    if ((int9 == 0)) {
        int5 = MAX(0, ((int3 / 2) - (int7 / 2)));
        int6 = MAX(0, ((int4 / 2) - (int8 / 2)));
        [int5, int6, int7, int8, int9] = script8382(int5, int6, int7, int8, int0, 0, 1);
    };
    script8387(int5, int6, int7, int8, int0);
    return;
}