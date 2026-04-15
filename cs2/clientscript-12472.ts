//
function script12472(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(11211 as cs2enum);
    var int3 = 0;
    var int4 = -1 as dbrow;
    while ((int0 < int2)) {
        int1 = enum_getvalue(0, 0, 11211 as cs2enum, int0);
        if ((int1 != -1)) {
            stack(36864);
            stack(int1);
            DB_FIND(0);
            dbrow_findnext();
            int4 = stack();
            if ((int4 != -1)) {
                int3 = (int3 + script12475(dbrow_getfield(int4, 36864, 0)));
            };
        };
        int0 = (int0 + 1);
    };
    return int3;
}