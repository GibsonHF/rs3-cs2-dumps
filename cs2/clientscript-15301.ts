//
function script15301(int0: int): npc {
    var int1 = script15302(int0);
    var int2 = script15303(int0);
    var int3 = enum_getvalue(0, 32, 12737 as cs2enum, int1);
    var int4 = -1 as cs2enum;
    if (((int2 > 0) && (enum_getvalue(32, 1, 12742 as cs2enum, int3) == true))) {
        int4 = enum_getvalue(32, 26, 12741 as cs2enum, int3);
        if ((int4 != -1 as cs2enum)) {
            int3 = enum_getvalue(0, 32, int4, (int2 - 1));
        };
    };
    return int3;
}