//
function script16598(int0: number): [number, number, number, number, number] {
    var int0 = MAX(int0, 0);
    var int1 = 0;
    var int2 = 0;
    var int3 = script16599();
    var int4 = ((int0 / int3) * int3);
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    while ((int7 == -1)) {
        int1 = enum_getvalue(0, 0, 11249 as cs2enum, int2);
        stack(749568);
        stack(int1);
        DB_FIND(0);
        int5 = dbrow_getfield(dbrow_findnext(), 749616, 0);
        if ((int0 >= int4)) {
            if ((int0 < (int4 + int5))) {
                int7 = MODULO((int4 + int5), 1440);
                int8 = (int0 / 1440);
                if (((int4 + int5) >= ((int8 + 1) * 1440))) {
                    int8 = (int8 + 1);
                };
            } else {
                int4 = (int4 + int5);
                int2 = MODULO((int2 + 1), ENUM_GETOUTPUTCOUNT(11249 as cs2enum));
            };
        } else {
            int4 = (int4 + int5);
            int2 = MODULO((int2 + 1), ENUM_GETOUTPUTCOUNT(11249 as cs2enum));
        };
    };
    var int9 = enum_getvalue(0, 0, 11249, MODULO((int2 + 1), ENUM_GETOUTPUTCOUNT(11249 as cs2enum)));
    stack(749568);
    stack(int9);
    DB_FIND(0);
    int6 = dbrow_getfield(dbrow_findnext(), 749616, 0);
    return [int1, int8, int7, int9, int6];
}