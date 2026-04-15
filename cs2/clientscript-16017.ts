//
function script16017(int0: int, int1: int, int2: int): int {
    var int3 = GETBIT_RANGE(int0, 16, 23);
    var int4 = GETBIT_RANGE(int1, 16, 23);
    var int5 = GETBIT_RANGE(int0, 8, 15);
    var int6 = GETBIT_RANGE(int1, 8, 15);
    var int7 = GETBIT_RANGE(int0, 0, 7);
    var int8 = GETBIT_RANGE(int1, 0, 7);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    int9 = (int3 + SCALE(int2, 100, (int4 - int3)));
    int10 = (int5 + SCALE(int2, 100, (int6 - int5)));
    int11 = (int7 + SCALE(int2, 100, (int8 - int7)));
    int11 = SETBIT_RANGE_TOINT(int11, int10, 8, 15);
    int11 = SETBIT_RANGE_TOINT(int11, int9, 16, 23);
    return int11;
}