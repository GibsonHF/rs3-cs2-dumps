//
function script14981(int0: int, int1: int, int2: int, int3: int, int4: int): [int, int, int, int] {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    [int5, int6, int7] = script9856(int1, int2, int3, int4);
    int5 = MIN(int5, int0);
    var int8 = (int0 / int5);
    if ((MODULO(int0, int5) > 0)) {
        int8 = (int8 + 1);
    };
    return [MAX(1, int8), int5, int6, int7];
}