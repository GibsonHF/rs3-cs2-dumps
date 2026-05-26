//
function script20247(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): [number, number] {
    var int7 = 0;
    if (((int2 > 0) && (int3 > 0))) {
        int7 = MIN(16384, SCALE(16384, int2, int3));
    };
    if (((int3 < int2) || (int2 < 0))) {
        var int6 = 0;
    };
    script10033(int0, int1++, 0, 0, 1, 1, 8, 2, 1, 1, -1);
    CC_SETFILL(1);
    CC_SETCOLOUR(1644825);
    script7918(int0, int1++, 0, 0, 0, 1, 9, 0, 0, 1, 35265);
    script20248(int4, int6);
    script7918(int0, int1++, 0, 0, 1, 1, 18, 0, 1, 1, 35266);
    script20248(int4, int6);
    script7918(int0, int1++, 0, 0, 2, 1, 9, 0, 0, 1, 35265);
    script20248(int4, int6);
    CC_SETHFLIP(true);
    script15937(int0, int1++, 6, 0, 0, 1, 10, 6, 1, 1);
    var int8 = CC_GETWIDTH();
    script7918(int0, int1++, 0, 0, 0, 1, int7, 0, 2, 1, 35267);
    script20248(int5, int6);
    return [int1, int8];
}