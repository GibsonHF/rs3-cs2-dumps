//
function script20952(): void {
    var int0 = script20117(varplayer_12314);
    if ((int0 == -1)) {
        script12478(`Attempted lookup without an active league: ${inttostring(varplayer_12314, 10)}`);
        return;
    };
    var int1 = dbrow_getfield(int0, 1335456, 0);
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = -1;
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int1, 1339392);
    var int5 = 0;
    var int6 = 0;
    while ((int3 < int4)) {
        int2 = dbrow_getfield(int1, 1339392, int3);
        int6 = dbrow_getfield(int2, 1343520, 0);
        if ((varbitplayer_61497 < int6)) {
            if ((int3 == 0)) {
                varbitplayer_61499 = 15;
            } else {
                varbitplayer_61499 = (int3 - 1);
            };
            varbitplayer_1668 = int5;
            varbitplayer_61498 = int6;
            return;
        };
        int5 = int6;
        int3 = (int3 + 1);
    };
    varbitplayer_61499 = (int3 - 1);
    varbitplayer_1668 = 255;
    varbitplayer_61498 = 255;
    return;
}