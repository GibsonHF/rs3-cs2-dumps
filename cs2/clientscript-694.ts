//[proc,lightcombine]
function script694(int0: int, int1: int): int {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int2, int3, int4] = script2413(int0);
    [int5, int6, int7] = script2413(int1);
    int2 = (int2 + int5);
    int3 = (int3 + int6);
    int4 = (int4 + int7);
    var int8 = MAX(int2, MAX(int3, int4));
    int5 = script669(255, int8, int2);
    int6 = script669(255, int8, int3);
    int7 = script669(255, int8, int4);
    return script693(int5, int6, int7);
}