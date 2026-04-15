//
function script1470(int0: int, int1: int, int2: int): unknown_int {
    var int3 = (MODULO(((int0 - int1) + int2), int2) - (int2 / 2));
    if ((int3 < 0)) {
        return -1;
    };
    return 1;
}