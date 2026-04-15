//
function script16731(int0: dbrow, int1: int): unknown_int {
    var int2 = -1 as obj;
    var int3 = -1;
    [int2, int3] = script16732(int0, int1);
    if (((int2 != -1 as obj) && (int3 > 0))) {
        return 1;
    };
    var int4 = script16955(int0, int1);
    if ((int4 != -1 as dbrow)) {
        return 1;
    };
    return 0;
}