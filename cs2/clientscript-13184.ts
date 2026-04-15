//
function script13184(): void {
    if (((IF_FIND(comp(1843, 251)) == 1) && ((cc_getparam(5945) + 50) > CLIENTCLOCK()))) {
        return;
    };
    var int0 = -1;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1 as struct;
    var int4 = comp(-1, 65535);
    while ((++int2 < 8)) {
        int3 = enum_getvalue(0, 73, 8601 as cs2enum, int2);
        if ((int3 != -1 as struct)) {
            int4 = struct_getparam(int3, 6397);
            if (((int4 != comp(-1, 65535)) && (IF_FIND(int4) == 1))) {
                int0 = cc_getparam(6361);
                if (((int0 != cc_getparam(6360)) && ((cc_getparam(5945) + 250) <= CLIENTCLOCK()))) {
                    int1 = 1;
                    script18205(int0, (2 + int2));
                } else if ((int0 == -1)) {
                    int2 = 8;
                };
            } else {
                int2 = 8;
            };
        } else {
            int2 = 8;
        };
    };
    if (((int1 == 1) && (IF_FIND(comp(1843, 251)) == 1))) {
        cc_setparam(5945, CLIENTCLOCK());
    };
    return;
}