//
function script2640(int0: struct, int1: struct, int2: struct, int3: dbrow): [struct, struct, struct] {
    if ((int0 == 41261 as struct)) {
        var int0 = dbrow_getfield(int3, 119408, 0);
    } else if ((int0 == 41262 as struct)) {
        int0 = dbrow_getfield(int3, 119424, 0);
    } else if ((int0 == 41263 as struct)) {
        int0 = dbrow_getfield(int3, 119440, 0);
    };
    if ((int1 == 41261 as struct)) {
        var int1 = dbrow_getfield(int3, 119408, 0);
    } else if ((int1 == 41262 as struct)) {
        int1 = dbrow_getfield(int3, 119424, 0);
    } else if ((int1 == 41263 as struct)) {
        int1 = dbrow_getfield(int3, 119440, 0);
    };
    if ((int2 == 41261 as struct)) {
        var int2 = dbrow_getfield(int3, 119408, 0);
    } else if ((int2 == 41262 as struct)) {
        int2 = dbrow_getfield(int3, 119424, 0);
    } else if ((int2 == 41263 as struct)) {
        int2 = dbrow_getfield(int3, 119440, 0);
    };
    return [int0, int1, int2];
}