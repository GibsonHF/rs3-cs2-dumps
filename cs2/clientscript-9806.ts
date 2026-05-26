//
function script9806(): void {
    if ((varplayer_9501 == -1 as dbrow)) {
        return;
    };
    IF_SETTEXT(dbrow_getfield(varplayer_9501, 430080, 0), comp(710, 4));
    IF_SETTEXT(dbrow_getfield(varplayer_9501, 430096, 0), comp(710, 6));
    var int0 = dbrow_getfield(varplayer_9501, 430160, 0);
    var int1 = DB_GETFIELDCOUNT(varplayer_9501, 430144);
    var int2 = (int0 - varbitplayer_47670);
    var int3 = script3505(varplayer_3079);
    var int4 = -1;
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 0;
    var int8 = false;
    var int9 = 0;
    varbitplayer_47669 = 0;
    var int10 = comp(710, 5);
    CC_DELETEALL(int10);
    while ((int9 < int1)) {
        [int7, int5, int6, int8] = dbrow_getfield(varplayer_9501, 430144, int9);
        if (((int7 >= int3) && (int4 == -1))) {
            if ((int7 == int3)) {
                int2 = (int2 + script9961(int9));
            };
            int4 = int9;
        };
        script9855(int10, int1, int7, int2, int5, int6, int9, int4, int0, int8);
        int9 = (int9 + 1);
    };
    return;
}