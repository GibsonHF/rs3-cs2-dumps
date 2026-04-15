//
function script8346(int0: int, int1: int, int2: int, int3: int): [unknown_int, unknown_int] {
    var int4 = 0;
    var int5 = 0;
    if ((int0 > int2)) {
        int4 = 1;
        var int3 = (int3 - 10);
    };
    if ((int1 > int3)) {
        int5 = 1;
        var int2 = (int2 - 10);
    };
    if (((int4 == 0) && (int0 > int2))) {
        int4 = 1;
        int3 = (int3 - 10);
    };
    if (((int5 == 0) && (int1 > int3))) {
        int5 = 1;
        int2 = (int2 - 10);
    };
    return [int4, int5];
}