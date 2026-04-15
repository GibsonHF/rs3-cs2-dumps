//
function script14575(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if ((script14568(int0) == 0)) {
        return 0;
    };
    if ((varplayer_9215 == -1 as cs2enum)) {
        return 1;
    };
    var int1 = enum_getvalue(26, 26, 14053 as cs2enum, varplayer_9216);
    var int2 = enum_getvalue(0, 0, int1, varplayer_9217);
    if ((int2 == 0)) {
        return 1;
    };
    var int3 = DB_GETFIELDCOUNT(int0, 335968);
    var int4 = -1;
    while ((++int4 < int3)) {
        if ((dbrow_getfield(int0, 335968, int4) == int2)) {
            return 1;
        };
    };
    return 0;
}