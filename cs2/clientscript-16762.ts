//
function script16762(): void {
    var int0 = script19150(32986 as struct);
    if ((int0 == -1 as dbrow)) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = dbrow_getfield(int0, 790624, 0);
    if ((int4 > 0)) {
        [int2, int3] = script16726();
        int1 = (int3 * int4);
    } else {
        int1 = dbrow_getfield(int0, 790608, 0);
    };
    if ((varbitplayer_51596 > int1)) {
        script12478("Monster HP is higher than its max hp, setting monster HP back to its Max.");
        varbitplayer_51596 = int1;
    };
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_51596, 1), comp(1288, 39));
    var int5 = SCALE(varbitplayer_51596, int1, 100);
    var int6 = SCALE(190, 100, int5);
    if ((IF_GETWIDTH(comp(1288, 38)) != int6)) {
        IF_SETSIZE(int6, 20, 0, 0, comp(1288, 38));
    };
    return;
}