//
function script21150(): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    stack(int0);
    script21151();
    [int2, int3, int4] = [];
    if ((((int2 == -1) || (int3 == -1)) || (int4 == -1))) {
        return;
    };
    if ((int0 == 2)) {
        IF_SETHIDE(true, int2);
        return;
    };
    if ((int1 == -1)) {
        var int1 = MAX(0, varbitplayer_62211);
    };
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    script10429(int4, int3, 0, 0, 200, IF_GETNEXTSUBID(int2), 13834, -1, "", int1, 0);
    return;
}