//
function script20532(int0: component, int1: int): int {
    var int2 = script8374(int0);
    var int3 = MAX(1, (IF_GETWIDTH(int0) / int1));
    var int4 = MAX(1, ((int2 / int3) + MIN(1, MODULO(int2, int3))));
    return int4;
}