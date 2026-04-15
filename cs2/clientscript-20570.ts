//
function script20570(int0: stat, int1: component, int2: component): void {
    var int3 = enum_getvalue(17, 0, 1482 as cs2enum, int0);
    var string0 = enum_getvalue(17, 36, 680 as cs2enum, int0);
    var string1 = "";
    var int4 = script20568(int0);
    var int5 = 3495 as cs2enum;
    if ((int4 == 1)) {
        int5 = 371 as cs2enum;
    };
    CC_DELETEALL(int1);
    var int6 = 21363 as struct;
    var int7 = 28303 as struct;
    var int8 = 29006;
    if ((int3 == varplayer_12583)) {
        script7794(int2, int7);
        IF_SETONMOUSEOVER(callback(), int2);
        IF_SETONMOUSELEAVE(callback(), int2);
    } else {
        script7794(int2, int6);
        if ((int4 == 1)) {
            IF_SETONMOUSEOVER(callback(script7793, -2147483645, int8), int2);
            IF_SETONMOUSELEAVE(callback(script7793, -2147483645, int6), int2);
        } else {
            IF_SETONMOUSEOVER(callback(), int2);
            IF_SETONMOUSELEAVE(callback(), int2);
        };
    };
    var int9 = 0;
    CC_CREATE(int1, 5, int9);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(enum_getvalue(0, 23, int5, int3));
    if ((int4 != 1)) {
        if ((int4 == 0)) {
            string0 = `${string0} - Unavailable`;
        } else if ((int4 == 2)) {
            string0 = `${string0} - Bonus XP Cap has been reached`;
        } else if ((int4 == 3)) {
            string0 = `${string0} - 200m XP Cap has been reached.`;
        };
        CC_SETTRANS(150);
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int1);
    IF_SETOP(1, "Choose", int1);
    IF_SETOPBASE(enum_getvalue(17, 36, 680, int0), int1);
    IF_SETONOP(callback(script20571, int0, int3, int1, int2), int1);
    return;
}