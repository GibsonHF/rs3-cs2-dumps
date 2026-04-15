//
function script6373(int0: int, int1: int): [int, int, int] {
    var int2 = MODULO(CLIENTCLOCK(), 36);
    var int3 = enum_getvalue(0, 0, 5924 as cs2enum, int2);
    var int4 = MIN((int0 + 8), (int0 + int3));
    var int5 = MIN((int1 + 8), (int1 + int3));
    return [int4, int5, enum_getvalue(0, 0, 5925 as cs2enum, int2)];
}