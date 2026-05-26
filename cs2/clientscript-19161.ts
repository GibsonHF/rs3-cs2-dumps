//
function script19161(): void {
    var int0 = script19150(50263);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1204592, 0);
    IF_SETGRAPHIC(int1, comp(1288, 37));
    var int2 = dbrow_getfield(int0, 1204320, 0);
    IF_SETTEXT(`${TOSTRING_LOCALISED(MAX(0, (int2 - varbitplayer_56037)), 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1288, 39));
    var int3 = SCALE(MAX(0, (int2 - varbitplayer_56037)), int2, 100);
    var int4 = SCALE(190, 100, int3);
    if ((IF_GETWIDTH(comp(1288, 38)) != int4)) {
        IF_SETSIZE(int4, 20, 0, 0, comp(1288, 38));
    };
    return;
}