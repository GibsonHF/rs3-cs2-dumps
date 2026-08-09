//
function script20246(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): number {
    var int8 = 0;
    stack(int0);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script15938(0, int2, 0, 0, 0, 24, 1, 0);
    CC_SETOP(1, "View");
    if ((STRING_LENGTH(string0) > 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    };
    var int9 = 0;
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script15937(3, 0, 0, 1, 64, 8, 1, 1);
    [int8, int9] = script20247(int1, int8, int3, int4, int6, int7, 1);
    stack(int0);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script15938(0, int2, 2, 0, 70, 24, 0, 0);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script7918(0, 0, 0, 1, 24, 24, 0, 0, int5);
    stack(int1);
    stack(int8);
    int8 = (int8 + 1);
    script10485(0, 0, 2, 1, 28, 0, 1, 1, 2141, TOSTRING_LOCALISED(MAX(0, (int3 - MAX(0, int4))), 1));
    return int8;
}