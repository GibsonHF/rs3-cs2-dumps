//
function script13055(int0: stat, int1: component, int2: component, int3: unknown_int): void {
    var int4 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    var string0 = enum_getvalue(17, 36, 680 as cs2enum, int0);
    varclient_1796 = varplayer_6791;
    varclient_5924 = varplayer_6792;
    var int5 = script6035(int0, varclient_1798, varclient_1799, 0);
    var int6 = 3495 as cs2enum;
    if ((int5 == 1)) {
        int6 = 371 as cs2enum;
    };
    CC_DELETEALL(int1);
    var int7 = 21363 as struct;
    var int8 = 28303 as struct;
    var int9 = 29006;
    if (((int4 == varclient_1796) || (int4 == varclient_5924))) {
        script7794(int2, int8);
        IF_SETONMOUSEOVER(callback(), int2);
        IF_SETONMOUSELEAVE(callback(), int2);
    } else {
        script7794(int2, int7);
        if ((int5 == 1)) {
            IF_SETONMOUSEOVER(callback(script7793, -2147483645, int9), int2);
            IF_SETONMOUSELEAVE(callback(script7793, -2147483645, int7), int2);
        } else {
            IF_SETONMOUSEOVER(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
        };
    };
    var int10 = 0;
    CC_CREATE(int1, 5, int10);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int6, int4));
    if ((int5 == 0)) {
        string0 = `${string0} - Unavailable`;
        CC_SETTRANS(150);
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    IF_SETOP(1, "Choose", int1);
    IF_SETOPBASE(enum_getvalue(17, 36, 680, int0), int1);
    IF_SETONOP(callback(script13056, int0, int4, int1, int3), int1);
    return;
}