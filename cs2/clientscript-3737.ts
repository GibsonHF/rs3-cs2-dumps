//
function script3737(int0: stat, int1: int, int2: component, int3: component): void {
    if ((script6035(int0, varclient_1798, varclient_1799, 1) == 0)) {
        return;
    };
    varclient_6409 = int1;
    var int4 = (ENUM_GETOUTPUTCOUNT(13815 as cs2enum) - 1);
    while ((int4 >= 0)) {
        var int2 = enum_getvalue(0, 9, 13815 as cs2enum, int4);
        if ((int2 != comp(-1, 65535))) {
            IF_CALLONRESIZE(int2);
        };
        int4 = (int4 - 1);
    };
    IF_CALLONRESIZE(int3);
    script3746(varclient_6409, varclient_6410);
    return;
}