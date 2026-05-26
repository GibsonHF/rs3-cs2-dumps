//
function script9401(int0: number): void {
    var int1 = 15728649;
    var int2 = 15728650;
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
            CC_SETHIDE(1);
        } else {
            CC_SETHIDE(0);
        };
    };
    return;
}