//
function script10644(int0: dbrow, int1: unknown_int, int2: unknown_int): void {
    if (((int0 == -1 as dbrow) || (DB_GETROWTABLE(int0) != 344))) {
        return;
    };
    var int3 = varbitplayer_22875;
    var int4 = 206 as fontmetrics;
    var int5 = 14931919;
    var int6 = 0;
    var int7 = 1;
    var int8 = true;
    if ((DB_GETFIELDCOUNT(int0, 1409024) <= int3)) {
        int3 = 0;
    };
    [int4, int8, int6, int7, int5] = dbrow_getfield(int0, 1409024, int3);
    CC_SETTEXTFONT(int4);
    CC_SETTEXTSHADOW(int8);
    if ((int1 == 1)) {
        CC_SETCOLOUR(int5);
    };
    if ((int2 == 1)) {
        CC_SETTEXTALIGN(int6, int7, 0);
    };
    CC_SETONVARTRANSMIT(callback(script10700, -2147483645, -2147483643, int0, varbitplayer_22875, int3, int1, int2, 3814, 1));
    return;
}