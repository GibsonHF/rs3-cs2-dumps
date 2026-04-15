//
function script14004(int0: unknown_int): void {
    var int1 = enum_getvalue(0, 39, 12546 as cs2enum, varbitplayer_22179);
    if ((int1 == -1 as inv)) {
        int1 = 705 as inv;
    };
    IF_SETONINVTRANSMIT(callback(script13375, -2147483645, int1, int1, 1), int0);
    IF_SETONVARTRANSMIT(callback(script13375, -2147483645, int1, 9932, 6954, 2), int0);
    IF_SETPOSITION(0, 0, 1, 1, int0);
    return;
}