//
function script715(int0: int, int1: int, int2: int, int3: int): int {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int4, int5, int6] = script2413(int0);
    [int7, int8, int9] = script2413(int2);
    int4 = ((int4 * int1) + (int7 * int3));
    int5 = ((int5 * int1) + (int8 * int3));
    int6 = ((int6 * int1) + (int9 * int3));
    var int10 = MAX(int4, MAX(int5, int6));
    int7 = script669(255, int10, int4);
    int8 = script669(255, int10, int5);
    int9 = script669(255, int10, int6);
    [int4, int5, int6] = script4127(int7, int8, int9);
    return script693(int7, int8, int9);
}