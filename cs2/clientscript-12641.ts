//
function script12641(int0: int, int1: int): [int, int] {
    var int2 = script12422(int0, 10000, enum_getvalue(0, 0, 3384 as cs2enum, int1));
    var int3 = script12422(int0, 10000, enum_getvalue(0, 0, 3384 as cs2enum, MODULO((int1 + 270), 360)));
    return [int2, int3];
}