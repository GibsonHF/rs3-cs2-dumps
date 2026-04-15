//
function script17895(int0: int, int1: int): [int, int] {
    var int2 = 0;
    var int3 = 0;
    int3 = SETBIT_RANGE_TOINT(int3, int0, 0, 7);
    int3 = SETBIT_RANGE_TOINT(int3, int1, 8, 11);
    return [int2, int3];
}