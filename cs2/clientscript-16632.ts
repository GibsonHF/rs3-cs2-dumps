//
function script16632(int0: dbrow): unknown_int {
    var int1 = dbrow_getfield(int0, 90256, 0);
    if ((int1 == -1)) {
        return 0;
    };
    var int2 = 0;
    var int3 = -1;
    var int4 = dbrow_getfield(int0, 90272, 0);
    var int5 = -1;
    var int6 = 2;
    while ((int6 <= 7)) {
        int5 = script16603(int6);
        if ((int5 > 0)) {
            int3 = dbrow_getfield(enum_getvalue(0, 74, 13175 as cs2enum, int5), 90272, 0);
            if (((int3 == int4) && (++int2 >= int1))) {
                return 1;
            };
        };
        int6 = (int6 + 1);
    };
    return 0;
}