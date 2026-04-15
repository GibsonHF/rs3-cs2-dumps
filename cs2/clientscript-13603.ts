//
function script13603(int0: component): void {
    var int1 = enum_getreverseindex(9, 0, 13036 as cs2enum, IF_GETPARENTLAYER(int0), 0);
    if (((int1 < 0) || (int1 > (ENUM_GETOUTPUTCOUNT(13036 as cs2enum) - 1)))) {
        return;
    };
    var int2 = comp(-1, 65535);
    if ((IF_GETHIDE(enum_getvalue(0, 9, 13037 as cs2enum, int1)) == false)) {
        script13604();
        IF_SETHIDE(true, enum_getvalue(0, 9, 13037 as cs2enum, int1));
        int2 = enum_getvalue(0, 9, 13039 as cs2enum, (int1 + 1));
        if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 0) == 1))) {
            CC_SETVFLIP(false);
        };
    } else {
        script13605(int1);
    };
    return;
}