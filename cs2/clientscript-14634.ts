//
function script14634(int0: dbrow, int1: int, int2: int): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int3 = script14637(int0, int1);
    if ((DB_GETFIELDCOUNT(int0, 368848) > 0)) {
        return (dbrow_getfield(int0, 368848, 0) * int3);
    };
    var int4 = enum_getvalue(0, 0, 14091 as cs2enum, int2);
    if ((dbrow_getfield(int0, 368656, 0) == 2)) {
        int4 = (int4 * 10);
    };
    int4 = SCALE(dbrow_getfield(int0, 368816, 0), 100, int4);
    var int5 = script14639(int0, int1);
    return SCALE(int5, 6000, int4);
}