//
function script9698(int0: inv, int1: int, int2: int): int {
    var int3 = INV_GETOBJ(int0, int1);
    var int4 = item_getparam(int3, 8605);
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    while ((++int7 < int4)) {
        int5 = MODULO((int2 + int7), int4);
        int6 = script9693(int0, int1, int5);
        if ((int6 != 0)) {
            return int5;
        };
    };
    return -1;
}