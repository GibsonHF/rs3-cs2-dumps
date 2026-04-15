//
function script11173(int0: dbrow): unknown_int {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = dbrow_getfield(int0, 741376, 0);
    if ((DATE_YEAR() < int2)) {
        return 0;
    };
    if (((DATE_YEAR() == int2) && (int1 > script15815()))) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = dbrow_getfield(int0, 741392, 0);
    var int5 = int1;
    var int6 = int2;
    var int7 = 0;
    while ((((int6 == int4) && (int5 <= int3)) || (int6 < int4))) {
        int7 = script11569(int6, int5);
        if (((int7 == 1) || (int7 == 2))) {
            return 1;
        };
        [int6, int5] = script11170(int6, int5);
    };
    return 0;
}