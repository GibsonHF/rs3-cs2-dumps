//
function script20247(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: unknown_int): [int, int] {
    var int7 = 0;
    if (((int2 > 0) && (int3 > 0))) {
        int7 = MIN(16384, SCALE(16384, int2, int3));
    };
    if (((int3 < int2) || (int2 < 0))) {
        var int6 = 0;
    };
    script10033(int0, int1++, 0, 0, 1, 1, 8, 2, 1, 1, -1 as dbrow);
    CC_SETFILL(1);
    CC_SETCOLOUR(1644825);
    script7918(int0, int1++, 0, 0, 0, 1, 9, 0, 0, 1, 35265 as graphic);
    script20248(int4, int6);
    script7918(int0, int1++, 0, 0, 1, 1, 18, 0, 1, 1, 35266 as graphic);
    script20248(int4, int6);
    script7918(int0, int1++, 0, 0, 2, 1, 9, 0, 0, 1, 35265 as graphic);
    script20248(int4, int6);
    CC_SETHFLIP(true);
    script15937(int0, int1++, 6, 0, 0, 1, 10, 6, 1, 1);
    var int8 = CC_GETWIDTH();
    script7918(int0, int1++, 0, 0, 0, 1, int7, 0, 2, 1, 35267 as graphic);
    script20248(int5, int6);
    return [int1, int8];
}