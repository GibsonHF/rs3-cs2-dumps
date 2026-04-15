//
function script20246(int0: component, int1: int, int2: int, int3: int, int4: int, int5: graphic, int6: int, int7: int, string0: string): int {
    var int8 = 0;
    script15938(int0, int1, int8++, 0, int2, 0, 0, 0, 24, 1, 0);
    CC_SETOP(1, "View");
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    };
    var int9 = 0;
    script15937(int1, int8++, 3, 0, 0, 1, 64, 8, 1, 1);
    [int8, int9] = script20247(int1, int8, int3, int4, int6, int7, 1);
    script15938(int0, int1, int8++, 0, int2, 2, 0, 70, 24, 0, 0);
    script7918(int1, int8++, 0, 0, 0, 1, 24, 24, 0, 0, int5);
    script10485(int1, int8++, 0, 0, 2, 1, 28, 0, 1, 1, 2141 as dbrow, TOSTRING_LOCALISED(MAX(0, (int3 - MAX(0, int4))), 1));
    return int8;
}