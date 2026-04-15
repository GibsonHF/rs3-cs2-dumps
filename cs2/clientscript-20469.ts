//
function script20469(int0: struct, int1: dbrow, int2: int, int3: unknown_int): [unknown_int, unknown_int] {
    if (((int2 == 0) && (script20614(int0) == 0))) {
        if ((int3 == 1)) {
            script1296("This item is not available to purchase.");
        };
        return [0, 0];
    };
    if ((((int1 != -1 as dbrow) && (DB_GETROWTABLE(int1) == 348)) && (script20473(dbrow_getfield(int1, 1425424, 0)) == 0))) {
        if ((int3 == 1)) {
            script1296("This item is not available to purchase.");
        };
        return [0, 0];
    };
    if ((int2 == 1)) {
        return [1, -1];
    };
    if ((((int2 == 0) && (int0 != -1 as struct)) && (varplayer_12587 == int0))) {
        if ((struct_getparam(int0, 2531) != 6)) {
            return [0, 1];
        };
        if ((struct_getparam(int0, 2532) != 2)) {
            return [0, 1];
        };
    };
    if ((((int2 == 2) && (int1 != -1 as dbrow)) && (script5725(int1) == 0))) {
        if ((int3 == 1)) {
            script1296("This item is not available to purchase.");
        };
        return [0, -1];
    };
    if (((int0 != -1 as struct) && (script6488(int0) == 1))) {
        if ((int3 == 1)) {
            script1296("This item is not available to purchase.");
        };
        return [0, 1];
    };
    if ((script7149(int1) == 0)) {
        return [0, 0];
    };
    return [1, -1];
}