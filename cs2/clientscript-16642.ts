//
function script16642(): void {
    var int0 = comp(981, 10);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = IF_GRID_GETLAYOUTPARAMS(int0);
    if ((int1 == 1)) {
        script12478("Grid is not setup to be in CELL mode");
        return;
    };
    var int4 = (int2 * int3);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = false;
    while ((++int5 <= int4)) {
        if ((int8 == false)) {
            int7 = (int7 + 1);
            script2994(int0, IF_GETNEXTSUBID(int0), 0, 0, 1, 1, 0, 16384, 4, 2, enum_getvalue(0, 23, 11337 as cs2enum, int7));
            CC_SETASPECT(1, 1);
        } else {
            int6 = (int6 + 1);
            script2995(int0, IF_GETNEXTSUBID(int0), 0, 0, 1, 1, 0, 16384, 4, 2, 17469 as dbrow, enum_getstring(912, int6));
            CC_SETTEXTALIGN(1, 1, 0);
        };
        if ((MODULO(int5, 5) == 0)) {
            int8 = script12585(int8);
        };
    };
    return;
}