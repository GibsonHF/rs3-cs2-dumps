//
function script9851(int0: int, int1: struct): unknown_int {
    var int2 = script16023(int0);
    var int3 = 0;
    if ((dbrow_getfield(int2, 315552, int3) == -1)) {
        return 0;
    };
    while (((int3 <= (DB_GETFIELDCOUNT(int2, 315552) - 1)) && (dbrow_getfield(int2, 315552, int3) != -1))) {
        if ((dbrow_getfield(int2, 315552, int3) == struct_getparam(int1, 4072))) {
            return 1;
        };
        int3 = (int3 + 1);
    };
    return 0;
}