//
function script12503(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(9029 as cs2enum);
    var int1 = 1;
    var int2 = -1 as struct;
    var int3 = false;
    var int4 = 10;
    var int5 = 10;
    while ((int1 <= int0)) {
        int2 = enum_getvalue(0, 73, 9029 as cs2enum, int1);
        int3 = false;
        if ((int2 != -1 as struct)) {
            if ((struct_getparam(int2, 8522) == false)) {
                CC_CREATE(comp(1761, 0), 5, IF_GETNEXTSUBID(comp(1761, 0)));
            } else {
                if ((struct_getparam(int2, 1353) > script1432())) {
                    int3 = true;
                };
                if ((script16088(int2) == 0)) {
                    int3 = true;
                };
                script12501(comp(1761, 1), comp(1761, 0), 28556 as struct, (8 + ((IF_GETWIDTH(comp(1761, 1)) / 2) * MODULO((int1 - 1), 2))), int4, ((IF_GETWIDTH(comp(1761, 1)) - 20) / 2), 20, IF_GETNEXTSUBID(comp(1761, 0)), int3, struct_getparam(int2, 1348));
                int4 = (int4 + (23 * MODULO((int1 - 1), 2)));
            };
            int5 = (int5 + (23 * MODULO((int1 - 1), 2)));
        };
        int1 = (int1 + 1);
    };
    if ((IF_GETHEIGHT(comp(1761, 5)) < (int5 + 27))) {
        IF_SETSCROLLSIZE(0, int5, comp(1761, 5));
        script7791(comp(1761, 6), comp(1761, 5));
    };
    return;
}