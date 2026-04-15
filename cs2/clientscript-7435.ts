//
function script7435(int0: unknown_int, int1: int): int {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = 0;
    var int6 = comp(-1, 65535);
    var string0 = "";
    var int7 = 0;
    [int2, int3, int4, int5, int6, string0, int7] = script7434(int0);
    var int1 = MAX(MIN(int1, int5), int4);
    return int1;
}