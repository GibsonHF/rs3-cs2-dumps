//
function script18081(int0: dbrow, int1: component, int2: int): int {
    var int3 = dbrow_getfield(int0, 1019937, 0);
    var int4 = dbrow_getfield(int0, 1019969, 0);
    var int5 = script17902(varplayer_11357);
    var int6 = 0;
    if ((IF_FIND(int1) == 1)) {
        CC_CREATECHILD(0, int6, 1);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        var int2 = (int2 + script17952(1, int6, 10, int2, 0, 0, (IF_GETWIDTH(int1) - 30), 0, 7982 as dbrow, dbrow_getfield(int0, 1019904, 0), (IF_GETWIDTH(int1) - 30), 57 as fontmetrics));
        int6 = (int6 + 1);
        if ((DB_GETFIELDCOUNT(int3, 1024016) > 0)) {
            int2 = (int2 + script17952(1, int6, 10, int2, 0, 0, (IF_GETWIDTH(int1) - 30), 0, 8002 as dbrow, dbrow_getfield(int3, 1024016, 0), (IF_GETWIDTH(int1) - 30), 209 as fontmetrics));
            int6 = (int6 + 1);
        };
        if ((int4 != -1 as dbrow)) {
            int2 = (int2 + script17952(1, int6, 10, int2, 0, 0, (IF_GETWIDTH(int1) - 30), 0, 8002 as dbrow, `Gain +${inttostring(dbrow_getfield(int0, 1019970, 0), 10)}% mission progress whilst training <col=2EF8FF>${dbrow_getfield(int4, 1024000, 0)}</col>`, (IF_GETWIDTH(int1) - 30), 209 as fontmetrics));
            int6 = (int6 + 1);
        };
        int2 = (int2 + 10);
        script10485(1, int6, 10, int2, 0, 0, 0, 30, 1, 0, 8002 as dbrow, `Mission Expires in: ${script18087(int5, 0, 0)}`);
        int2 = (int2 + 40);
        int6 = (int6 + 1);
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions info panel.");
    };
    return int2;
}