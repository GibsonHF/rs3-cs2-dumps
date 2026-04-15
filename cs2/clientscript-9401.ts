//
function script9401(int0: int): void {
    var int1 = comp(240, 9);
    var int2 = comp(240, 10);
    var int3 = enum_getvalue(0, 0, 9458 as cs2enum, int0);
    var int4 = script8229(5, int3);
    if ((CC_FIND(int1, int0) == 1)) {
        CC_CLEAROPS();
        if ((int4 == -1)) {
            CC_SETOP(1, `Select ${enum_getvalue(0, 36, 108 as cs2enum, int3)}`);
        } else {
            CC_SETOP(1, `Remove ${enum_getvalue(0, 36, 108 as cs2enum, int3)}`);
        };
    };
    if ((CC_FIND(int2, int0) == 1)) {
        if ((int4 == -1)) {
            CC_SETHIDE(true);
        } else {
            CC_SETHIDE(false);
        };
    };
    return;
}