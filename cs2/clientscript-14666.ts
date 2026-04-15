//
function script14666(int0: int): int {
    var int1 = script14650(int0);
    var int2 = script14652(int0);
    var int3 = script14653(int0);
    if ((int1 == -1 as dbrow)) {
        return 0;
    };
    var int4 = enum_getvalue(0, 0, 14092 as cs2enum, int3);
    var int5 = script14639(int1, int2);
    int4 = SCALE(int5, 6000, int4);
    int4 = SCALE((100 + RANDOMINC(100)), 100, int4);
    var int6 = 100;
    if ((script14668(int0, 1) == 1)) {
        int6 = (int6 + 5);
    };
    if ((script14668(int0, 2) == 1)) {
        int6 = (int6 + 10);
    };
    var int7 = SCALE(int6, 100, int4);
    return int7;
}