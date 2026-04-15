//
function script14861(int0: unknown_int, int1: int, int2: int): void {
    var int3 = enum_getvalue(0, 74, 14090 as cs2enum, int2);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(691, 141));
            IF_SETSIZE(460, 330, 0, 0, comp(691, 75));
            IF_SETONOP(callback(script14863, -2147483644, 1, int0), 45285541);
            IF_SETONOP(callback(script14863, -2147483644, 2, int0), 45285521);
            IF_SETONOP(callback(script14863, -2147483644, 3, int0), 45285559);
            script14864(int1);
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(691, 141));
            IF_SETSIZE(460, 198, 0, 0, comp(691, 75));
            break;
        }
        default: {
            return;
        }
    };
    script14862(int0, int1, int2);
    script14870();
    IF_SETHIDE(false, comp(691, 73));
    IF_SETHIDE(false, comp(691, 75));
    return;
}