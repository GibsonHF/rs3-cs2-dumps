//
function script13844(int0: component, int1: component, int2: cs2enum, int3: unknown_int, int4: int): void {
    var int5 = enum_getreverseindex(0, 0, int2, int4, 0);
    if ((IF_GETNEXTSUBID(int1) < (int5 + 1))) {
        return;
    };
    script13845(int0, int1, int2, int3, int5, int5);
    return;
}