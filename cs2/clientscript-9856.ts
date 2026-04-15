//
function script9856(int0: int, int1: int, int2: int, int3: int): [int, int, int] {
    var int0 = (int0 - int2);
    var int4 = (int1 + int3);
    int4 = MAX(1, int4);
    var int5 = (int0 / int4);
    int5 = MAX(1, int5);
    var int6 = ((int4 * int5) - int3);
    int0 = (int0 - int6);
    var int7 = (int5 - 1);
    var int8 = 0;
    if ((int7 >= 1)) {
        int8 = (int0 / int5);
        int0 = (int0 - (int7 * int8));
    };
    var int9 = (int0 / 2);
    return [int5, (int4 + int8), int9];
}