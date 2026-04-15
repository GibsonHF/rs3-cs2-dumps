//
function script13056(int0: stat, int1: int, int2: component, int3: component): void {
    var int4 = 0;
    var int5 = 0;
    if ((script6035(int0, varclient_1798, varclient_1799, 1) == 0)) {
        return;
    };
    if ((varclient_1796 == int1)) {
        varclient_1796 = 0;
        int4 = 1;
        varclient_5925 = 1;
    };
    if ((varclient_5924 == int1)) {
        varclient_5924 = 0;
        int5 = 1;
        varclient_5925 = 2;
    };
    if (((int4 == 0) && (int5 == 0))) {
        if ((varclient_1796 == 0)) {
            varclient_1796 = int1;
            varclient_5925 = 1;
        } else if ((varclient_5924 == 0)) {
            varclient_5924 = int1;
            varclient_5925 = 2;
        } else if (((varclient_1796 != 0) && (varclient_5924 != 0))) {
            if ((varclient_5925 == 1)) {
                varclient_5924 = int1;
                varclient_5925 = 2;
            } else {
                varclient_1796 = int1;
                varclient_5925 = 1;
            };
        };
    };
    var int6 = (ENUM_GETOUTPUTCOUNT(12140 as cs2enum) - 1);
    while ((int6 >= 0)) {
        var int2 = enum_getvalue(0, 9, 12140 as cs2enum, int6);
        if ((int2 != comp(-1, 65535))) {
            IF_CALLONRESIZE(int2);
        };
        int6 = (int6 - 1);
    };
    IF_CALLONRESIZE(int3);
    return;
}