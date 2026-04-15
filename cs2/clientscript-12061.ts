//
function script12061(int0: dbrow): [unknown_int, string] {
    var string0 = "";
    var int1 = dbrow_getfield(int0, 20624, 0);
    if ((STAT(26 as stat) < int1)) {
        return [0, `This blueprint requires ${inttostring(int1, 10)} Invention.`];
    };
    var int2 = -1 as stat;
    var int3 = 0;
    if ((varbitplayer_30223 < 105)) {
        switch (int0) {
            case 205: {
                if ((varbitplayer_30223 < 5)) {
                    return [0, ""];
                };
                break;
            }
            case 206: {
                if ((varbitplayer_30223 < 55)) {
                    return [0, ""];
                };
                break;
            }
            case 207: {
                if ((varbitplayer_30223 < 80)) {
                    return [0, ""];
                };
                break;
            }
            default: {
                return [0, ""];
            }
        };
    };
    var int4 = DB_GETFIELDCOUNT(int0, 20656);
    while ((int4-- > 0)) {
        [int2, int3] = dbrow_getfield(int0, 20656, int4);
        if ((STAT(int2) < int3)) {
            return [0, `This blueprint requires ${inttostring(int3, 10)} ${enum_getvalue(17, 36, 680 as cs2enum, int2)}.`];
        };
    };
    int4 = DB_GETFIELDCOUNT(int0, 20640);
    while ((int4-- > 0)) {
        int3 = dbrow_getfield(int0, 20640, int4);
        string0 = script1525(int3);
        if ((script7073(int3) != 2)) {
            return [0, `This blueprint requires completion of the quest: '${string0}'.`];
        };
    };
    int4 = DB_GETFIELDCOUNT(int0, 20672);
    while ((int4-- > 0)) {
        int3 = dbrow_getfield(int0, 20672, int4);
        if ((script12059(int3) != 1)) {
            return [0, `This blueprint requires an understanding of the invention: '${dbrow_getfield(int0, 20496, 0)}'`];
        };
    };
    int4 = DB_GETFIELDCOUNT(int0, 20688);
    var int5 = 0;
    while ((int4-- > 0)) {
        [int5, int3] = dbrow_getfield(int0, 20688, int4);
        if ((script5929(int5, int3) != 1)) {
            return [0, `This blueprint requires an understanding of: '${script12051(int0, 0)} Technology'.`];
        };
    };
    return [1, ""];
}