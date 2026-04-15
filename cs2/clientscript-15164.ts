//
function script15164(int0: dbrow, int1: component, int2: component, int3: cs2enum, int4: unknown_int, int5: int): int {
    var int6 = IF_GETNEXTSUBID(int2);
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = ENUM_GETOUTPUTCOUNT(int3);
    var int10 = 3;
    var int11 = 0;
    while ((int8 < int9)) {
        int7 = enum_getvalue(0, 74, int3, int8);
        if (((int4 == 1) && (int8 == int5))) {
            int11 = 1;
        } else {
            int11 = 0;
        };
        int6 = script15165(int0, int1, int2, int7, int6, int10, int11);
        int10 = (++int10 + 3);
        int8 = (int8 + 1);
    };
    return int10;
}