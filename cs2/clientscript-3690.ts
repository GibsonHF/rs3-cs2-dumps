//
function script3690(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): [unknown_int, unknown_int, unknown_int, unknown_int] {
    if ((int2 == int4)) {
        var int2 = int3;
        var int3 = int4;
    };
    if ((int1 == int4)) {
        var int1 = int2;
        int2 = int3;
        int3 = int4;
    };
    if ((int0 == int4)) {
        var int0 = int1;
        int1 = int2;
        int2 = int3;
        int3 = int4;
    };
    return [int0, int1, int2, int3];
}