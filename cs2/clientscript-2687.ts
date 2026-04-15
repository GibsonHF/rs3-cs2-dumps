//
function script2687(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): [unknown_int, unknown_int, unknown_int] {
    if ((int1 == int3)) {
        var int1 = int2;
        var int2 = int3;
    };
    if ((int0 == int3)) {
        var int0 = int1;
        int1 = int2;
        int2 = int3;
    };
    return [int0, int1, int2];
}