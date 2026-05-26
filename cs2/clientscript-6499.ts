//
function script6499(int0: number): void {
    var int1 = (1 + ENUM_GETOUTPUTCOUNT(9908));
    CC_DELETEALL(74645514);
    CC_DELETEALL(74645515);
    CC_DELETEALL(74645516);
    CC_DELETEALL(74645513);
    CC_DELETEALL(74645518);
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
        IF_SETHIDE(0, 74645504);
    } else {
        IF_SETHIDE(1, 74645504);
    };
    script11227(74645514, 74645515, 74645516, 74645518);
    IF_SETSCROLLSIZE(0, (int2 * 40), 74645519);
    script7791(74645521, 74645519);
    return;
}