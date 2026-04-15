//
function script1481(int0: unknown_int, int1: int, int2: int): int {
    var int3 = script1478(int0, int1);
    return enum_getvalue(0, 0, int3, MODULO((int2 + script1468(int1)), ENUM_GETOUTPUTCOUNT(int3)));
}