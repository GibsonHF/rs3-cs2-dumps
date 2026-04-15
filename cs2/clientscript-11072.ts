//
function script11072(int0: cs2enum, int1: component): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 50;
    if ((IF_FIND(int1) == 1)) {
        int2 = cc_getparam(8100);
        while (((int2 != comp(-1, 65535)) && (int4 > 0))) {
            if ((IF_FIND[1](int2) == 1)) {
                int3 = cc_getparam[1](8105);
                if ((enum_getvalue(73, 1, int0, cc_getparam[1](8106)) == true)) {
                    script15426(cc_getparam[1](8106));
                };
                int2 = int3;
            } else {
                int2 = comp(-1, 65535);
            };
            int4 = (int4 - 1);
        };
    };
    return;
}