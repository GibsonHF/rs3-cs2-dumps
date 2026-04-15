//
function script2522(int0: dbrow, int1: int): unknown_int {
    var int2 = enum_getvalue(0, 74, 14569 as cs2enum, int1);
    if ((int2 == -1 as dbrow)) {
        return 0;
    };
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int2, 127024);
    while ((int3 < int4)) {
        if ((dbrow_getfield(int2, 127024, int3) == int0)) {
            return 1;
        };
        int3 = (int3 + 1);
    };
    return 0;
}