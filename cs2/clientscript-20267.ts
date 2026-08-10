//
function script20267(int0: number, int1: number, int2: number, int3: number): [number, number] {
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(int0, 1347744);
    var string0 = "";
    while ((int5 < int6)) {
        string0 = dbrow_getfield(int0, 1347748, int5);
        if (((STRING_LENGTH(string0) > 0) && (dbrow_getfield(int0, 1347747, int5) == 0))) {
            [int2, int3] = script19617(0, int2, int3, int4, 1, string0);
        };
        int5 = (int5 + 1);
    };
    int5 = 0;
    int6 = DB_GETFIELDCOUNT(int0, 1347792);
    while ((int5 < int6)) {
        string0 = dbrow_getfield(int0, 1347792, int5);
        if ((STRING_LENGTH(string0) > 0)) {
            [int2, int3] = script19617(0, int2, int3, int4, 1, string0);
        };
        int5 = (int5 + 1);
    };
    if (((MAP_MEMBERS() == 0) && (dbrow_getfield(int1, 1343536, 0) == 0))) {
        switch (varbitplayer_61493) {
            case 0: {
                [int2, int3] = script19615(0, int2, int3, int4, "Note: Some relic effects may not be available on non-member worlds.");
                break;
            }
            case 1: {
                [int2, int3] = script19615(0, int2, int3, int4, "Note: Some blessing effects may not be available on non-member worlds.");
                break;
            }
            default: {
                [int2, int3] = script19615(0, int2, int3, int4, "Note: Some effects may not be available on non-member worlds.");
                break;
            }
        };
    };
    return [int2, int3];
}