//
function script10811(): void {
    if ((varplayer_5006 == -1 as struct)) {
        return;
    };
    var int0 = ENUM_GETOUTPUTCOUNT(5587 as cs2enum);
    var int1 = 4;
    var int2 = 0;
    var int3 = 0;
    var int4 = comp(-1, 65535);
    while ((int3 < int0)) {
        int4 = enum_getvalue(0, 9, 5587 as cs2enum, int3);
        if ((((int4 != comp(-1, 65535)) && (IF_FIND(int4) == 1)) && (CC_GETHIDE() == false))) {
            CC_SETPOSITION(CC_GETX(), int2, 0, 0);
            int2 = ((int2 + CC_GETHEIGHT()) + int1);
        };
        int3 = (int3 + 1);
    };
    return;
}