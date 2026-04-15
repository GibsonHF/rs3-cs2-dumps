//
function script9676(int0: component): void {
    if (((script13749() == false) || (varplayer_2644 == comp(-1, 65535)))) {
        return;
    };
    var int1 = enum_getvalue(9, 9, 1592 as cs2enum, varplayer_2644);
    var int2 = IF_GETX(int0);
    var int3 = IF_GETY(int0);
    IF_SETPOSITION(int2, int3, 0, 0, int1);
    return;
}