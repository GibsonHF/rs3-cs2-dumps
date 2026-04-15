//
function script13196(int0: int): [string, graphic] {
    var int1 = enum_getvalue(0, 0, 12198 as cs2enum, int0);
    if ((int1 < 0)) {
        return ["", -1 as graphic];
    };
    return [enum_getvalue(0, 36, 5971 as cs2enum, int1), enum_getvalue(0, 23, 9995 as cs2enum, int1)];
}