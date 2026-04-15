//
function script2364(int0: component): void {
    var int1 = 1;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    while ((int1 < 9)) {
        int3 = enum_getvalue(0, 9, 2352 as cs2enum, int1);
        if ((IF_FIND(int3) == 1)) {
            int2 = cc_getparam(1224);
            int4 = enum_getvalue(0, 9, 3308 as cs2enum, int2);
            if ((int0 == int4)) {
                script2365(int3);
                return;
            };
        };
        int1 = (int1 + 1);
    };
    return;
}