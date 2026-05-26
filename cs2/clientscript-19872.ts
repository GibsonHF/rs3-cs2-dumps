//
function script19872(): void {
    var int0 = script19150(2951);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1290624, 0);
    IF_SETGRAPHIC(int1, comp(1288, 37));
    var int2 = dbrow_getfield(int0, 1290336, 0);
    IF_SETTEXT(`${TOSTRING_LOCALISED(MAX(0, (int2 - varbitplayer_57715)), 1)}/${TOSTRING_LOCALISED(int2, 1)}`, comp(1288, 39));
    var int3 = SCALE(MAX(0, (int2 - varbitplayer_57715)), int2, 100);
    var int4 = SCALE(190, 100, int3);
    if ((IF_GETWIDTH(comp(1288, 38)) != int4)) {
        IF_SETSIZE(int4, 20, 0, 0, comp(1288, 38));
    };
    return;
}