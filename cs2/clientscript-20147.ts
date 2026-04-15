//
function script20147(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1 as dbrow)) {
        script12478(`Attempted lookup without an active league: ${inttostring(varplayer_12314, 10)}`);
        return;
    };
    var int1 = dbrow_getfield(int0, 1335648, 0);
    var int2 = WORLDMAP_GETDISPLAYCOORD(int1);
    script1854(dbrow_getfield(int0, 1335456, 0), int2);
    var int3 = dbrow_getfield(int0, 1335424, 0);
    var int4 = -1 as dbrow;
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(int3, 1339392);
    var int7 = 0;
    var int8 = 0;
    while ((int5 < int6)) {
        int4 = dbrow_getfield(int3, 1339392, int5);
        int8 = dbrow_getfield(int4, 1343520, 0);
        if ((int2 < int8)) {
            if ((int5 == 0)) {
                varbitplayer_58404 = 63;
            } else {
                varbitplayer_58404 = (int5 - 1);
            };
            varbitplayer_58405 = int7;
            varbitplayer_58406 = int8;
            return;
        };
        int7 = int8;
        int5 = (int5 + 1);
    };
    varbitplayer_58404 = (int5 - 1);
    varbitplayer_58405 = 1048575;
    varbitplayer_58406 = 1048575;
    return;
}