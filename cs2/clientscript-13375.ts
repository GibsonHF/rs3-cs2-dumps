//
function script13375(int0: component, int1: inv): void {
    var int2 = enum_getvalue(0, 39, 12546 as cs2enum, varbitplayer_22179);
    if ((int2 == -1 as inv)) {
        int2 = 705 as inv;
    };
    if ((int2 != int1)) {
        IF_SETONINVTRANSMIT(callback(script13375, -2147483645, int2, int2, 1), int0);
        IF_SETONVARTRANSMIT(callback(script13375, -2147483645, int2, 9932, 6954, 2), int0);
    };
    script8471(int0, int2);
    return;
}