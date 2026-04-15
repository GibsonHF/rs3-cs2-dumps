//
function script20305(int0: dbrow): string {
    var int1 = script20119(varplayer_12314);
    if ((int1 == -1 as dbrow)) {
        return "";
    };
    var int2 = dbrow_getfield(int1, 1372163, 0);
    return inttostring(enum_getvalue(0, 0, int2, dbrow_getfield(int0, 1368160, 0)), 10);
}