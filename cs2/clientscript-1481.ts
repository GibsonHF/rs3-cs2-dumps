//
function script1481(int0: number, int1: number, int2: number): number {
    var int3 = script1478(int0, int1);
    return enum_getvalue(0, 0, int3, MODULO((int2 + script1468(int1)), ENUM_GETOUTPUTCOUNT(int3)));
}