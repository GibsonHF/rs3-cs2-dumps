//
function script10224(int0: mapelement, int1: int, int2: int): void {
    CC_DELETEALL(comp(1422, 4));
    if (((varbitplayer_14112 == 1) || (IF_HASSUB(comp(1477, 800)) == 0))) {
        return;
    };
    CC_CREATE(comp(1422, 4), 5, 0);
    CC_SETSIZE(24, 24, 0, 0);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script8405(comp(1422, 4));
    CC_SETPOSITION(((int1 - int3) - (CC_GETWIDTH() / 2)), ((int2 - int4) - (CC_GETHEIGHT() / 2)), 0, 0);
    script7590(int0);
    return;
}