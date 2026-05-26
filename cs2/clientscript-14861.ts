//
function script14861(int0: number, int1: number, int2: number): void {
    var int3 = enum_getvalue(0, 74, 14090 as cs2enum, int2);
    if ((int3 == -1 as dbrow)) {
        return;
    };
    switch (int0) {
        case 1: {
            IF_SETHIDE(0, 45285517);
            IF_SETSIZE(460, 330, 0, 0, 45285451);
            IF_SETONOP(callback(script14863, -2147483644, 1, int0), 45285541);
            IF_SETONOP(callback(script14863, -2147483644, 2, int0), 45285521);
            IF_SETONOP(callback(script14863, -2147483644, 3, int0), 45285559);
            script14864(int1);
            break;
        }
        case 2: {
            IF_SETHIDE(1, 45285517);
            IF_SETSIZE(460, 198, 0, 0, 45285451);
            break;
        }
        default: {
            return;
        }
    };
    script14862(int0, int1, int2);
    script14870();
    IF_SETHIDE(0, 45285449);
    IF_SETHIDE(0, 45285451);
    return;
}