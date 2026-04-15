//
function script2972(int0: dbrow, int1: int, int2: dbrow): unknown_int {
    var int3 = 0;
    while ((int3 < int1)) {
        if ((dbrow_getfield(int0, 127024, int3) == int2)) {
            return 1;
        };
        int3 = (int3 + 1);
    };
    return 0;
}