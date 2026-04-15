//
function script6499(int0: unknown_int): void {
    var int1 = (1 + ENUM_GETOUTPUTCOUNT(9908 as cs2enum));
    CC_DELETEALL(comp(1139, 10));
    CC_DELETEALL(comp(1139, 11));
    CC_DELETEALL(comp(1139, 12));
    CC_DELETEALL(comp(1139, 9));
    CC_DELETEALL(comp(1139, 14));
    var int2 = script11225(int0, int1);
    script11220(int2);
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = 0;
    while ((int3 < int1)) {
        int5 = enum_getvalue(0, 0, 9909 as cs2enum, int3);
        int4 = enum_getvalue(0, 73, 9908 as cs2enum, int5);
        script11221(int4, int3, int0);
        script11222(int4, int3, int0);
        script11223(int4, int3, int0);
        int3 = (int3 + 1);
    };
    if ((int2 == 0)) {
        IF_SETHIDE(false, comp(1139, 0));
    } else {
        IF_SETHIDE(true, comp(1139, 0));
    };
    script11227(comp(1139, 10), comp(1139, 11), comp(1139, 12), comp(1139, 14));
    IF_SETSCROLLSIZE(0, (int2 * 40), comp(1139, 15));
    script7791(comp(1139, 17), comp(1139, 15));
    return;
}