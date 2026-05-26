//
function script6040(int0: number, int1: number, int2: number, int3: number): void {
    if ((script6035(int0, varclient_1798, varclient_1799, 1) == 0)) {
        return;
    };
    varclient_1796 = int1;
    var int4 = (ENUM_GETOUTPUTCOUNT(5727) - 1);
    while ((int4 >= 0)) {
        var int2 = enum_getvalue(0, 9, 5727 as cs2enum, int4);
        if ((int2 != comp(-1, 65535))) {
            IF_CALLONRESIZE(int2);
        };
        int4 = (int4 - 1);
    };
    IF_CALLONRESIZE(int3);
    return;
}