//
function script19872(): void {
    var int0 = script19150(2951 as struct);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = dbrow_getfield(int0, 1290624, 0);
    stack(int1);
    stack(84410405);
    IF_SETGRAPHIC();
    stack(int0);
    stack(1290336);
    stack(0);
    dbrow_getfield();
    var int2 = stack();
    IF_SETTEXT(`${TOSTRING_LOCALISED(MAX(0, (int2 - varbitplayer_57715)), 1)}/${TOSTRING_LOCALISED(int2, 1)}`, 84410407);
    var int3 = SCALE(MAX(0, (int2 - varbitplayer_57715)), int2, 100);
    var int4 = SCALE(190, 100, int3);
    if ((IF_GETWIDTH(84410406) != int4)) {
        IF_SETSIZE(int4, 20, 0, 0, comp(1288, 38));
    };
    return;
}